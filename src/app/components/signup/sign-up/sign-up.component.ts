import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/signup.model';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userSignUpRequest: SignUp = {
    UserName: '',
    UserEmail: '',
    Password: ''
  }
  isFormSubmitted = false;
  constructor(
    private userService: UsersService,
    private router: Router,
    private toastr: ToastrService
    ) { }
  signup() {
    this.isFormSubmitted=true;
    this.userService.userSignUp(this.userSignUpRequest)
    .subscribe({
      next: (response) => {
        this.toastr.success("Registered Successfully");
        this.router.navigate(['home/users/login']);
      },
      error: (resp) => {
        console.log('Registering failed:',resp);
        this.toastr.warning("Registration Failed" );//+ resp);
        this.router.navigate(['signup']);
      }
    })
  }

}
