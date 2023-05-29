import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../../services/train.service';
import { Router } from '@angular/router';
import { Train } from 'src/app/models/Train.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {
  addTrainRequest: Train = {
    Id : 0,
    TrainName : '',
    TrainId : 0,
    Origin : '',
    Destination : '',
    Departure : new Date(),
    Arrival : new Date(),
    SeatCapacity : 0,
    SeatRate : 0
  };
  isFormSubmitted: boolean = false;
  constructor(private trainService:TrainService, private router:Router,private toastr: ToastrService){

  }
  ngOnInit(): void {
      
  }

  addTrain(){
    this.isFormSubmitted = true;
    this.trainService.AddTrains(this.addTrainRequest)
    .subscribe({
      next : (train) => {
        this.router.navigate(['/train']);
        this.toastr.success('Train Added Successfully');
        console.log(train);
      },
      error : (err) => {
        console.log(err);
        this.toastr.error("Please enter valid details");
      }
    })
  }
}
