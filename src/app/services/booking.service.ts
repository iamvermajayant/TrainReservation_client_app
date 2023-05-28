import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { bookingUser } from 'src/app/models/bookingUser.model';
import { Passenger } from '../models/Passenger.model';
import { GetBooking } from '../models/GetBooking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient, private router: Router) { }

  baseApiUrl : string = 'http://localhost:5137/api/';


  addBooking(trainId: number, ticketCount: number): Observable<any> {
    const url = this.baseApiUrl + '';

    const params = new HttpParams()
    .set('ticketCount', ticketCount.toString())
    .set('TrainId', trainId.toString());

      console.log(params);

    return this.http.post(url, null, { params });
  }

  addPassengers(bookingUser: bookingUser):Observable<any>{
    return this.http.post(this.baseApiUrl + 'Booking/BookTicket', bookingUser);
  }

  getAllBookings():Observable<GetBooking[]>{
    return this.http.get<GetBooking[]>(this.baseApiUrl + 'Admin/AllBookings');
  }

  getAllBookingsOfUser():Observable<GetBooking[]>{
    return this.http.get<GetBooking[]>(this.baseApiUrl + 'Booking/BookedTicketHistory');
  }
  
  bookTicket(bghModel: bookingUser): Observable<any> {
    return this.http.post<any>(`${this.baseApiUrl}Booking/BookTicket`, bghModel);
  }
}
