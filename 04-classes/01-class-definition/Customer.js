var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// let myCustomer = new Customer();
// myCustomer.firstName = "Syamil";
// myCustomer.lastName = "Zamzuri";
var myCustomer = new Customer("Syamil", "Zamzuri");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
