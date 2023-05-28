import { Component } from '@angular/core';
import { PassengerDetails, bookingUser } from 'src/app/models/bookingUser.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent {
  bghModel: bookingUser = {
      TrainId: 0,
      PassengerDetails: []
  }; // Define the structure of the bghModel object as per your requirements
  passengers: any = []; //

  constructor(private bookingService: BookingService) { }


  addPassenger(): void {
    this.passengers.push({ Name: '', Age: null, Gender: '' });
  }

  removePassenger(index: number): void {
    this.passengers.splice(index, 1);
  }
  bookTicket(): void {
    for (let i = 0; i < this.passengers.length; i++){
        
        this.bghModel.PassengerDetails.push(this.passengers[i]);
    }
    this.bookingService.bookTicket(this.bghModel).subscribe(
      response => {
        console.log(response); // Handle the success response
      },
      error => {
        console.error(error); // Handle the error response
      }
    );
  }
}
