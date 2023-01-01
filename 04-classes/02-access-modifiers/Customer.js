var CustomerDetails = /** @class */ (function () {
    function CustomerDetails(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(CustomerDetails.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerDetails.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerDetails;
}());
var myCustomerClass = new CustomerDetails("Syamil", "Zamzuri");
console.log(myCustomerClass.firstName);
console.log(myCustomerClass.lastName);
