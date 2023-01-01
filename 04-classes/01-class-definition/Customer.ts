class Customer{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// let myCustomer = new Customer();
// myCustomer.firstName = "Syamil";
// myCustomer.lastName = "Zamzuri";
let myCustomer = new Customer("Syamil","Zamzuri");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);