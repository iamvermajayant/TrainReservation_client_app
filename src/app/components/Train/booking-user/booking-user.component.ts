import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { GetBooking } from 'src/app/models/GetBooking.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-booking-user',
  templateUrl: './booking-user.component.html',
  styleUrls: ['./booking-user.component.css']
})
export class BookingUserComponent implements OnInit {
  CancelTicketRequest : GetBooking = {
    PNR :0,
    BookingDate : new Date(),
    TrainId : 0,
    UserId : 0,
    ticketCount : 0,
    Id : 0
  };
  
  bookingsDisplay : GetBooking[] = []
  searchTerm : any = ""
  constructor(
    private bookingService : BookingService, 
    private http : HttpClient,  
    private toastr: ToastrService, 
    private spinner: NgxSpinnerService
    ) {}

  ngOnInit(): void {
      this.bookingService.getAllBookingsOfUser()
      .subscribe({
        next : (book) => {
          //localStorage.setItem('TrainId'
          console.log(book);
          this.bookingsDisplay = book;
          // for (const booking of book) {
          //   //localStorage.setItem('TrainId', booking.TrainId);
          // }
          
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
    //this.searchTerm = ""
    window.location.reload();
  }

  confirmCancellation(bookingId: number) {
    const confirmation = confirm('Are you sure you want to cancel this ticket?');
    
    if (confirmation) {
      this.sendPostRequest(bookingId);
      this.toastr.success('ticket cancelled successfully')
    } else {
      this.toastr.warning('Cancellation canceled');
    }
  }

  sendPostRequest(trainId: number) {
    const url = 'http://localhost:5137/api/Booking/CancelTicket';
    const params = { id: trainId };
    

    this.http.post(url, null, { params })
      .subscribe({
        next : (response) => {
          window.location.reload();
          //this.spinner.show();
          //this.toastr.success('Train Added Successfully');
          console.log(response);
          //this.spinner.hide(); 
        },
        error : err =>{
          console.log(err);
        }
      });
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
