import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../../services/train.service';
import { Train } from 'src/app/models/Train.model';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display-train',
  templateUrl: './display-train.component.html',
  styleUrls: ['./display-train.component.css']
})
export class DisplayTrainComponent implements OnInit{
  trainsDisplay : Train[] = [];
  searchTerm : string = "";
  filteredTrains : Train[] = [];
  originSearchTerm : string = "";
  destinationSearchTerm : string = "";
  constructor(private trainService : TrainService, private userService : UsersService, private router : Router, private location : Location) {

  }

  
  ngOnInit(): void {
      this.trainService.getTrains()
      .subscribe({
        next : (trains) =>{
          this.trainsDisplay = trains;
          console.log(trains);
        },
        error : (response) => {
          console.log(response);
        }
      })

      for (const train of this.trainsDisplay) {
        console.log(train); // Accessing each object in the API response
        console.log(train.TrainName); // Accessing specific properties, e.g., TrainName
        console.log("hello");
      }
  }

  
  
  searchTrains() {
    if (this.searchTerm) {
      this.trainsDisplay = this.trainsDisplay.filter(train => {
        // Perform case-insensitive search on train name and train number
        return train.TrainName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          train.TrainName.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
          train.TrainId.toString().includes(this.searchTerm) ||
          train.Origin.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          train.Destination.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
      
    } else {
      // Reset the trainsDisplay array to show all trains
      this.trainService.getTrains()
        .subscribe({
          next: (trains) => {
            this.trainsDisplay = trains;
          },
          error: (response) => {
            console.log(response);
          }
        });
    }
  }

  searchTrainOriginDestination() {
    if (this.originSearchTerm || this.destinationSearchTerm) {
      this.trainsDisplay = this.trainsDisplay.filter(train => {
        const searchOriginLowerCase = this.originSearchTerm.toLowerCase();
        const searchDestinationLowerCase = this.destinationSearchTerm.toLowerCase();
        
        // Perform case-insensitive search on origin and destination
        return (
          train.Origin.toLowerCase().includes(searchOriginLowerCase) &&
          train.Destination.toLowerCase().includes(searchDestinationLowerCase)
        );
      });
    } else {
      // Reset the trainsDisplay array to show all trains
      this.trainService.getTrains()
        .subscribe({
          next: (trains) => {
            this.trainsDisplay = trains;
          },
          error: (response) => {
            console.log(response);
          }
        });
    }
  }

  reset(){
    this.searchTerm = '';
    window.location.reload();
  }
  
  formatBookingDate(dateString: Date): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }
  

}
