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
  searchTerm : string ="";
  selectedTrainId : string = '';
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
    this.selectedTrainId = train.TrainId.toString();
    localStorage.setItem('trainId', this.selectedTrainId)
    this.router.navigate(['User/createbookings']);
  }

  searchTrains(){
    if (this.searchTerm){
      console.log("hello");
      this.trainsDisplayForUser = this.trainsDisplayForUser.filter(train =>{
        return train.TrainName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          train.TrainName.toLowerCase().includes(this.searchTerm.toLowerCase());
      })
    }
    else{
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
  }
  
  // sortData(column: string): void {
  //   switch (column) {
  //     case 'TrainName':
  //       this.trainsDisplayForUser.sort((a, b) => a.TrainName.localeCompare(b.TrainName));
  //       break;
  //     case 'TrainId':
  //       this.trainsDisplayForUser.sort((a, b) => a.TrainId - b.TrainId);
  //       break;
  //     case 'Origin':
  //       this.trainsDisplayForUser.sort((a, b) => a.Origin.localeCompare(b.Origin));
  //       break;
  //     case 'Destination':
  //       this.trainsDisplayForUser.sort((a, b) => a.Destination.localeCompare(b.Destination));
  //       break;
  //     case 'Departure':
  //       this.trainsDisplayForUser.sort((a, b) => new Date(a.Departure).getTime() - new Date(b.Departure).getTime());
  //       break;
  //     case 'Arrival':
  //       this.trainsDisplayForUser.sort((a, b) => new Date(a.Arrival).getTime() - new Date(b.Arrival).getTime());
  //       break;
  //     case 'SeatCapacity':
  //       this.trainsDisplayForUser.sort((a, b) => a.SeatCapacity - b.SeatCapacity);
  //       break;
  //     case 'SeatRate':
  //       this.trainsDisplayForUser.sort((a, b) => a.SeatRate - b.SeatRate);
  //       break;
  //     default:
  //       // No sorting logic for the selected column
  //       break;
  //   }
  // }

  sortBy: string | undefined;
  sortDirection: string | undefined;

  // Sort the data based on the selected column
  sortData(column: string): void {
    if (this.sortBy === column) {
      // Reverse the sort direction if the same column is clicked again
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set the new column and default sort direction
      this.sortBy = column;
      this.sortDirection = 'asc';
    }

    // Perform the sorting of the data
    this.trainsDisplayForUser.sort((a, b) => {
      const aValue = this.getPropertyValue(a, column);
      const bValue = this.getPropertyValue(b, column);

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  // Get the property value from the object based on the given column
  getPropertyValue(obj: any, column: string): any {
    const properties = column.split('.');
    let value = obj;

    for (const prop of properties) {
      value = value[prop];
    }

    return value;
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
