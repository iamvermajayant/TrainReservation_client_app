import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/models/Passenger.model';
import { v4 as uuid } from 'uuid';
import { booking } from '../../../models/booking.model';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})

export class AddPassengerComponent {
  studentForm: FormGroup = new FormGroup({
    studentList: new FormArray([this.getStudentFields()]),
  });

  getStudentFields(): FormGroup {
    return new FormGroup({
      student_name: new FormControl(''),
      student_class: new FormControl(''),
      student_age: new FormControl(''),
      studentSubjects: new FormGroup({
        studentSubjectArray: new FormArray([this.putNewSubject()]),
      }),
    });
  }

  putNewSubject() {
    return new FormGroup({
      subject: new FormControl(''),
      marks: new FormControl(''),
    });
  }

  studentListArray() {
    return this.studentForm.get('studentList') as FormArray;
  }

  addStudent() {
    this.studentListArray().push(this.getStudentFields());
  }

  removeStudent(i: number) {
    this.studentListArray().removeAt(i);
  }

  subjectsFormGroup(i: number) {
    return this.studentListArray().at(i).get('studentSubjects') as FormGroup;
  }

  subjectsArray(i: number) {
    return this.subjectsFormGroup(i).get('studentSubjectArray') as FormArray;
  }

  addNewSubject(i: number) {
    this.subjectsArray(i).push(this.putNewSubject());
  }

  removeNewSubject(i: number, j: number) {
    this.subjectsArray(i).removeAt(j);
  }

  getFormData() {
    console.log(this.studentForm.value);
  }
}



// export class AddPassengerComponent implements OnInit {
//   pnr = localStorage.getItem('PNR');
//   pnrvalue: number = this.pnr !== null ? parseInt(this.pnr, 10) : 0;

//   addPassengerRequest : Passenger = {
//     Id : Date.now(),
//     Name : '',
//     Age : 0,
//     Gender : '',
//     PNR : this.pnrvalue
//   }
//   passengerDisplay : Passenger[] = [];
//   isFormSubmitted : boolean = false
//   clickCounter = 0
//   ticketCountString = localStorage.getItem('ticketCount');
//   maxClickCount: number = this.ticketCountString !== null ? parseInt(this.ticketCountString, 10) : 0;
//   //maxClickCount = parseInt(this.maxClickCountValue);
//   constructor(private booking : BookingService, private router : Router){

//   }
  
//   ngOnInit(): void {
    
//   }
  
//   formArray: any[] = [];
//   count(){
//     //let clickCounter = localStorage.getItem('ticketCount');
//     // console.log(count);
//   }

//   addNewForm(){
//       this.formArray.push('');
//       this.clickCounter++;
//   }

//   addPassengers(){
//     this.isFormSubmitted = true;
//     this.booking.addPassengers(this.addPassengerRequest)
//     .subscribe({
//       next :(passenger) => {
//         this.passengerDisplay = passenger;
//         console.log(passenger);
//       },
//       error : (err) => {
//         console.log(err);
//       }
//     })
  
//   }
// }