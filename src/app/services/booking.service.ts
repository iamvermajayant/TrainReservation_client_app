import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { booking } from 'src/app/models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient, private router: Router) { }

  baseApiUrl : string = 'http://localhost:5137/api/';


  addBooking(trainId: number, ticketCount: number): Observable<any> {
    const url = this.baseApiUrl + 'Booking/BookTicket';

    const params = new HttpParams()
    .set('ticketCount', ticketCount.toString())
    .set('TrainId', trainId.toString());

      console.log(params);

    return this.http.post(url, null, { params });
  }
}
