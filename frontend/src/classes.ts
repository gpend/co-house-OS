// post
//  user
class User {
    gender : string;
	firstName : string;
	lastName : string;
    birthday : Date;
	appointments: CalendarItem[] = [];
	hobbies : Hobby[] = [];
    Account : Account
    maintenanceRequests: MaintenanceRequest[];
  
    constructor(gender: string, firstName: string, lastName: string, birthday : Date, appointments: CalendarItem[], maintenanceRequests: maintenanceRequest[]) {
      this.gender = gender;
      this.firstName = firstName;
      this.lastName = lastName;
      this.appointments = appointments;
      this.maintenanceRequests = maintenanceRequests;
      this.birthday = birthday;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.firstName}.`);
    }
}


class CalendarItem {
    appointmentTitle: string;
    appointmentDate : string;
    appointmentTime : string;
    appointmentLocation : Address;
    guests: User [];

    constructor(appointmentTitle: string, appointmentDate: string, appointmentTime: string, appointmentLocation: Address, guests : User []) {
        this.appointmentTitle = appointmentTitle;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.appointmentLocation = appointmentLocation
        this.guests = guests
    }
    
    //AddGuests(User);
    //AddLocation(Address/room);
    //RemoveGuests(User);

}


class Address {
	addressLine1 : string 
	addressLine2 : string 
	city : string 
	state : string 
	zipCode : string 

    constructor(addressLine1: string, addressLine2: string, city: string, state: string, zipCode: string) {
        this.addressLine1 = addressLine1
        this.addressLine2 = addressLine2
        this.city = city
        this.state = state
        this.zipCode = zipCode
    }
}


class Child extends User{
    parent : User;

    constructor (parent: User, gender: string, firstName: string, lastName: string, birthday : Date, appointments: CalendarItem[], maintenanceRequests: maintenanceRequest[]){
        super(gender, firstName, lastName, birthday, appointments, maintenanceRequest[])
        this.parent = parent
    }
}
