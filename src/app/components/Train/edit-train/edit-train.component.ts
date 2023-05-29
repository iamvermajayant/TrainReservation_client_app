import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Train } from 'src/app/models/Train.model';
import { TrainService } from 'src/app/services/train.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.css']
})
export class EditTrainComponent implements OnInit{
  EditTrainRequest: Train = {
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
  isFormSubmitted = false;
  constructor(
    private route :ActivatedRoute, 
    private router : Router, 
    private trainService : TrainService,
    private toastr : ToastrService
    ){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next : (params) => {
          const trainID = params.get('Id');
          if(trainID){
            this.trainService.getTrain(trainID)
            .subscribe({
              next : (response) => {
                this.EditTrainRequest = response;
              }
            })
          }
        }
      })
  }

  updateTrain(){
    this.trainService.updateTrain(this.EditTrainRequest.Id, this.EditTrainRequest)
    .subscribe({
      next: (response) => {
        this.router.navigate(['/train']);
        console.log(response);
        this.toastr.success("train updated successfully");
      },
      error : (res) => {
        console.log(res);
      }
    })
  }

  deleteTrain(id:number){
    this.trainService.deleteTrain(id)
    .subscribe({
      next : (response) => {
        this.router.navigate(['/train'])
        this.toastr.success("Train deleted successfully");
      },
      error : (res) => {
        console.log(res);
      } 
    })
  }
}
