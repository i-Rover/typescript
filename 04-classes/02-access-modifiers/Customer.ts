class CustomerDetails{
    private _firstName:string;
    private _lastName:string;

    constructor(firstName:string,lastName:string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(value:string){
        this._firstName = value;
    }

    public get lastName():string{
        return this._lastName;
    }

    public set lastName(value:string){
        this._lastName = value;
    }
}

let myCustomerClass = new CustomerDetails("Syamil","Zamzuri");
console.log(myCustomerClass.firstName);
console.log(myCustomerClass.lastName);