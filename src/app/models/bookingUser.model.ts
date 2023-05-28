// booking.model.ts

export interface PassengerDetails {
    Name: string;
    Age: number;
    Gender : string;
  }
  
  export interface bookingUser {
    TrainId: number;
    PassengerDetails: PassengerDetails[];
  }
  