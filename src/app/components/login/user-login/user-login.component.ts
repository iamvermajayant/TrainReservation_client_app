import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userLoginRequest: Login = {
    UserEmail: '',
    Password: ''
  };
  isFormSubmitted = false;
  
  constructor(
    private userService: UsersService,
    private router: Router, 
    private toastr: ToastrService 
    ) { }

    login() {
      this.isFormSubmitted = true;
      this.userService.userLogin(this.userLoginRequest)
        .subscribe({
          next: (response) => {
            const token = response.token;
            this.userService.setToken(token);
            console.log(token);
            this.toastr.success('Login Successful');
            if (this.userService.getUserRole() === "user") {
              this.router.navigate(['/User/train']);
            } else if (this.userService.getUserRole() === "admin") {
              this.router.navigate(['/train']);
            } else {
              this.router.navigate(['']);
            }
          },
          error: (errorResponse) => {
            console.log('Login failed:', errorResponse);
            if (errorResponse && errorResponse.error && errorResponse.error.notverified) {
              const errorMessage = errorResponse.error.notverified[0];
              this.toastr.error(errorMessage);
            } else {
              this.toastr.error('Login Failed, please try again');
            }
          }
        });
    }    
}
