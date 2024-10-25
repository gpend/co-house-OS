// post
//  user
class User {
    gender : string;
	firstName : string;
	lastName : string;
    birthday : Date;
    relatives : User[] = []
	appointments: CalendarItem[] = [];
	hobbies : string[] = [];
    account : Account
    maintenanceRequests: MaintenanceRequest[];
  
    constructor(gender: string, firstName: string, lastName: string, birthday : Date, relatives: User[], appointments: CalendarItem[], hobbies:string[], account: Account, maintenanceRequests: MaintenanceRequest[]) {
      this.gender = gender;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = birthday;
      this.relatives = relatives
      this.appointments = appointments;
      this.hobbies = hobbies
      this.account = account;
      this.maintenanceRequests = maintenanceRequests;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.firstName}.`);
    }
}

class Child extends User{
    parent : User;

    constructor (gender: string, firstName: string, lastName: string, birthday: Date, relatives: User[], appointments: CalendarItem[], hobbies:string[], account: Account, maintenanceRequests: MaintenanceRequest[], parent: User){
        super(gender, firstName, lastName, birthday, relatives, appointments, hobbies, account, maintenanceRequests)
        this.parent = parent
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

class MaintenanceRequest {
  
}

class Account {

}

