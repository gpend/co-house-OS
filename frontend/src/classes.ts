// post
//  user
class User {
  
    constructor(public gender: string, 
        public firstName: string, 
        public lastName: string, 
        public birthday : Date, 
        public relatives: User[], 
        public appointments: CalendarItem[], 
        public hobbies:string[], 
        public account: Account, 
        public maintenanceRequests: MaintenanceRequest[]) {

    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.firstName}.`);
    }
}

class Child extends User{

    constructor (public gender: string,
         public firstName: string,
         public lastName: string,
         public birthday: Date,
         public relatives: User[],
         public appointments: CalendarItem[], 
         public hobbies:string[], 
         public account: Account, 
         public maintenanceRequests: MaintenanceRequest[], 
         public parent: User){
        super(  gender,
                firstName,
                lastName,
                birthday,
                relatives,
                appointments,
                hobbies,
                account,
                maintenanceRequests,
        );
    }

}

class CalendarItem {

    constructor
    (    public appointmentTitle: string,
         public appointmentDate: string,
         public appointmentTime: string,
         public appointmentLocation:Address, 
         public guests :User []
    ) {
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

