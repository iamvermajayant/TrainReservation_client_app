export interface PassengerDetails {
    Name: string;
    Age: number;
    Gender : string;
  }


export interface pnr {
    TrainName : string
    TrainId : number
    Origin : string
    Destination : string
    Departure : Date
    Arrival : Date
    PassengerDetails : PassengerDetails[]
    BookingDate : Date
    PNR : number
}