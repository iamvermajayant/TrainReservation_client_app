import { Component } from '@angular/core';
import { PassengerDetails, bookingUser } from 'src/app/models/bookingUser.model';
import { BookingService } from 'src/app/services/booking.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-booking',
  templateUrl: './create-booking.component.html'
})
export class BookingComponent {
  bghModel: bookingUser = {
    TrainId: 0,
    PassengerDetails: []
  };

  passengers: PassengerDetails[] = [];

  constructor(
    private bookingService: BookingService, 
    private toastrService: ToastrService, 
    private router: Router,
    private spinner: NgxSpinnerService
    ) { 
    const trainId = localStorage.getItem('trainId');
    if (trainId) {
      this.bghModel.TrainId = +trainId; // Convert trainId from string to number
    }
  }

  addPassenger(): void {
    this.passengers.push({ Name: '', Age: 0, Gender: '' });
  }

  removePassenger(index: number): void {
    this.passengers.splice(index, 1);
  }

  bookTicket(): void {
    this.bghModel.PassengerDetails = this.passengers;
    this.bookingService.bookTicket(this.bghModel).subscribe(
      response => {
        this.showSpinner();
        console.log(response); // Handle the success response
        this.toastrService.success("Ticket booked successfully");
        this.hideSpinner();
        this.router.navigate(['User/train']);
        
      },
      error => {
        console.error(error); // Handle the error response
        this.toastrService.error("Please enter valid details to book ticket :)"); // Handle the error response
      }
    );
  }

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }
}
