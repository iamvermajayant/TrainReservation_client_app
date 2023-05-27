// booking.model.ts

export interface PassengerDetails {
    Name: string;
    Age: number;
  }
  
  export interface bookingUser {
    TrainId: number;
    PassengerDetails: PassengerDetails[];
  }
  