import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pnr } from 'src/app/models/Pnr.model';
import { TrainService } from '../../../services/train.service';
import { Train } from 'src/app/models/Train.model';

@Component({
  selector: 'app-pnr-details',
  templateUrl: './pnr-details.component.html',
  styleUrls: ['./pnr-details.component.css']
})
export class PnrDetailsComponent implements OnInit {
  pnrDisplay : pnr[] = [];
  PNR : number = 0

  pnrDisplayRequest : pnr = {
    TrainName : '',
    TrainId : 0,
    Origin : '',
    Destination : '',
    Departure : new Date(),
    Arrival : new Date(),
    BookingDate : new Date(),
    PNR : 0,
    PassengerDetails : []
  }
  
  constructor(private router : Router, private trainService : TrainService) {
    
  }

  ngOnInit(): void {
      
  }
  searchPNR(pnr : number){
    this.trainService.getBookingByPnr(pnr)
    .subscribe({
      next : (booking) => {
        this.pnrDisplay = booking
        console.log(booking);
        console.log(this.pnrDisplay);
      },
      error : (response) => {
        console.log(response);
      }
    })
    this.pnrDisplay.push();
  }



  reset(){
    this.pnrDisplay.push()
  }

}