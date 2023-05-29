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
  pnrDisplay: pnr[] = [];
  PNR: number = 0;

  constructor(private router: Router, private trainService: TrainService) { }

  ngOnInit(): void {
  }

  searchPNR(pnr: number) {
    this.trainService.getBookingByPnr(pnr)
      .subscribe(
        (booking: pnr) => {
          this.pnrDisplay = [booking]; // Assign the response data to pnrDisplay as an array
          console.log(booking);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  

  reset() {
    this.pnrDisplay = [];
  }
}
