import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { GetBooking } from 'src/app/models/GetBooking.model';

@Component({
  selector: 'app-booking-user',
  templateUrl: './booking-user.component.html',
  styleUrls: ['./booking-user.component.css']
})
export class BookingUserComponent implements OnInit {
  bookingsDisplay : GetBooking[] = []
  searchTerm : number = 0
  constructor(private bookingService : BookingService){

  }

  ngOnInit(): void {
      this.bookingService.getAllBookingsOfUser()
      .subscribe({
        next : (book) => {
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

  formatBookingDate(dateString: Date): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
