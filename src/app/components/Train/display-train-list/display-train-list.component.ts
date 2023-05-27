import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../../services/train.service';
import { Router } from '@angular/router';
import { Train } from 'src/app/models/Train.model';

@Component({
  selector: 'app-display-train-list',
  templateUrl: './display-train-list.component.html',
  styleUrls: ['./display-train-list.component.css']
})
export class DisplayTrainListComponent implements OnInit {
  trainsDisplayForUser : Train[] = [];
  
  constructor(private trainService : TrainService, private router : Router){

  }
  ngOnInit(): void {
      this.trainService.getTrainsForUser()
      .subscribe({
        next : (response) =>{
          console.log(response);
          this.trainsDisplayForUser = response;
        },
        error : (response) =>{
          console.log(response);
        }
      })
  }
  showTrainId(train: Train) {
    console.log("heelo")
    alert(`Train ID: ${train.TrainId}`);
    this.router.navigate(['User/book']);
  }
}
