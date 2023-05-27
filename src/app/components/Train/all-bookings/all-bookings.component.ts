import { Component, OnInit } from '@angular/core';
import { GetBooking } from 'src/app/models/GetBooking.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit{
  bookingsDisplay : GetBooking[] = [];
  searchTerm : number = 0
  constructor(private bookingService : BookingService){

  }

  ngOnInit(): void {
    this.bookingService.getAllBookings()
    .subscribe({
      next : (book) =>{
        this.bookingsDisplay = book;
        console.log(book);
      },
      error : (response) => {
        console.log(response);
      }
    })
  }

  searchTrains() {
    if (this.searchTerm) {
      console.log("hello");
      this.bookingsDisplay = this.bookingsDisplay.filter(train => { 
        return train.PNR === this.searchTerm;
      });
      
    } else {
      // Reset the bookingsDisplay array to show all trains
      this.bookingService.getAllBookings()
        .subscribe({
          next: (trains) => {
            this.bookingsDisplay = trains;
          },
          error: (response) => {
            console.log(response);
          }
        });
    }
  }
  searchTrain()
  {
    console.log('hello');
  }

  reset(){
    this.searchTerm = 0
    window.location.reload();
  }




}
