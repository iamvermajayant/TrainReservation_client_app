import { Component } from '@angular/core';
import { PassengerDetails, bookingUser } from 'src/app/models/bookingUser.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class BookingComponent {
  Age: number = 0;
  ageError: boolean = false;
  
  bghModel: bookingUser = {
    TrainId: 0,
    PassengerDetails: []
  };

  passengers: PassengerDetails[] = [];

  constructor(private bookingService: BookingService) { 
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
        console.log(response); // Handle the success response
      },
      error => {
        console.error(error); // Handle the error response
      }
    );
  }

  checkAgeValidity() {
    if (this.Age < 0 || this.Age > 120) {
      this.ageError = true;
    } else {
      this.ageError = false;
    }
  }
}