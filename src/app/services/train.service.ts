import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../models/Train.model';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  baseApiUrl : string = "http://localhost:5137/api/";

  constructor(private http: HttpClient) { }

  getTrains():Observable<Train[]> {
    return this.http.get<Train[]>(this.baseApiUrl + 'Admin/GetTrain')
  }

  AddTrains(train:Train):Observable<any>{
   return this.http.post(this.baseApiUrl + 'Admin/CreateTrain', train) 
  }

  getTrain(id:string):Observable<Train>{
    return this.http.get<Train>(this.baseApiUrl + 'Admin/GetTrainById/' + id)
  }

  updateTrain(id:number, updateTrainRequest:Train):Observable<Train>{
    return this.http.put<Train>(this.baseApiUrl + 'Admin/updateTrainDetails/' + id, updateTrainRequest);
  }

  deleteTrain(id:number) : Observable<Train>{
    return this.http.delete<Train>(this.baseApiUrl + 'Admin/DeleteTrainDetails/' + id);
  }

  getTrainsForUser():Observable<Train[]>{
    return this.http.get<Train[]>(this.baseApiUrl + 'Booking/GetTrainUser');
  }

  getBookingByPnr(pnr : number):Observable<any>{
    return this.http.get(this.baseApiUrl + 'Booking/GetBookingByPNR/'+ pnr );
  }
}
