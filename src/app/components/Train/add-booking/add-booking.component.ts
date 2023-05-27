import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from 'src/app/models/Train.model';
import { booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  isFormSubmitted : boolean = false;

  bookTrainRequest : booking = {
    ticketCount : 0,
    TrainId : 0
  }
  constructor(private router : Router, private booking : BookingService){

  }
  ngOnInit(): void {
      
  }

  bookTicket(TrainId: number , ticketCount: number){
    console.log("hello")
    
    const booking: booking = {
      ticketCount: ticketCount,
      TrainId: TrainId
    };
    //this.isFormSubmitted = true;
    this.booking.addBooking(TrainId,ticketCount)
    .subscribe({
      next : (book) => {
        console.log(book);
        let pnr = book.tempPNR;
        localStorage.setItem('pnr', pnr);
        let ticketCount = book.ticketCount;
        localStorage.setItem('ticketCount' , ticketCount);
        this.router.navigate(['User/book/addpassenger'])
      },
      error : (err) => {
        console.log(err);
        alert(err.error);
      }
    })
  
  }

  // bookTicket() {
  //   this.booking.navigateToBookingPage(this.TrainId, this.ticketCount);
  // }

}
