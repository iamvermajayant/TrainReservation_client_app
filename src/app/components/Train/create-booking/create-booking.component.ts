import { Component, OnInit  } from '@angular/core';
import { PassengerDetails, bookingUser } from 'src/app/models/bookingUser.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './create-booking.component.html'
})
export class BookingComponent implements OnInit{
  localStorageValue: any; 

  bghModel: bookingUser = {
    TrainId: 0,
    PassengerDetails: []
  };

  passengers: PassengerDetails[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.localStorageValue = localStorage.getItem('trainId');
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



}
