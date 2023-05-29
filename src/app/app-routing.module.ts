import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './components/home/home-list/home-list.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { RoleguardService } from './services/roleguard.service';
import { AddTrainComponent } from './components/Train/add-train/add-train.component';
import { DisplayTrainComponent } from './components/Train/display-train/display-train.component';
import { EditTrainComponent } from './components/Train/edit-train/edit-train.component';
import { DisplayTrainListComponent } from './components/Train/display-train-list/display-train-list.component';
//import { AddPassengerComponent } from './components/Train/add-passenger/add-passenger.component';
import { BookingComponent } from './components/Train/create-booking/create-booking.component';
import { AllBookingsComponent } from './components/Train/all-bookings/all-bookings.component';
import { BookingUserComponent } from './components/Train/booking-user/booking-user.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { PnrDetailsComponent } from './components/Train/pnr-details/pnr-details.component';
const routes: Routes = [
  {path: '',component: HomeListComponent},
  {path: 'home/users/login', component: UserLoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'train', component: DisplayTrainComponent, canActivate: [RoleguardService],data: {expectedRole: 'admin'}},
  {path: 'train/addtrain', component: AddTrainComponent, canActivate: [RoleguardService],data: {expectedRole: 'admin'}},
  {path : 'train/edit/:Id', component : EditTrainComponent, canActivate: [RoleguardService],data: {expectedRole: 'admin'}},
  {path : 'User/train', component : DisplayTrainListComponent, canActivate: [RoleguardService],data: {expectedRole: 'user'}},
  {path : 'train/admin/bookings', component : AllBookingsComponent, canActivate: [RoleguardService],data: {expectedRole: 'admin'}},
  {path : 'User/allbookings', component : BookingUserComponent, canActivate: [RoleguardService],data: {expectedRole: 'user'}},
  {path : 'User/createbookings', component :BookingComponent, canActivate: [RoleguardService],data: {expectedRole: 'user'}},
  {path : 'Error404', component : UnauthorizedComponent},
  {path : 'getpnrdetails', component : PnrDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
