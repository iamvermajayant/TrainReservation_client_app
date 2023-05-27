import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { JwtInterceptor } from './components/login/user-login/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { AddTrainComponent } from './components/Train/add-train/add-train.component';
import { DisplayTrainComponent } from './components/Train/display-train/display-train.component';
import { EditTrainComponent } from './components/Train/edit-train/edit-train.component';
import { DisplayTrainListComponent } from './components/Train/display-train-list/display-train-list.component';
import { AddBookingComponent } from './components/Train/add-booking/add-booking.component';
import { AddPassengerComponent } from './components/Train/add-passenger/add-passenger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    UserLoginComponent,
    SignUpComponent,
    AddTrainComponent,
    DisplayTrainComponent,
    EditTrainComponent,
    DisplayTrainListComponent,
    AddBookingComponent,
    AddPassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
