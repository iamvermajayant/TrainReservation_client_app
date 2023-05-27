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
import { AddPassengerComponent } from './components/Train/add-passenger/add-passenger.component';
import { AllBookingsComponent } from './components/Train/all-bookings/all-bookings.component';
import { BookingUserComponent } from './components/Train/booking-user/booking-user.component';
const routes: Routes = [
  {path: '',component: HomeListComponent},
  {path: 'home/users/login', component: UserLoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'train', component: DisplayTrainComponent},
  {path: 'train/addtrain', component: AddTrainComponent},
  {path : 'train/edit/:Id', component : EditTrainComponent},
  {path : 'User/train', component : DisplayTrainListComponent},
  {path : 'User/book/addpassenger',component : AddPassengerComponent},
  {path : 'train/admin/bookings', component : AllBookingsComponent},
  {path : 'User/allbookings', component : BookingUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
