class UserDetails{
    private _userName: string;
    private _jobPosition: string;
    private _salary: number;

    constructor (_userName:string,_jobPosition:string,_salary:number){
        this._userName = _userName;
        this._jobPosition = _jobPosition;
        this._salary = _salary;
    }

    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }

    public get jobPosition(): string {
        return this._jobPosition;
    }
    public set jobPosition(value: string) {
        this._jobPosition = value;
    }

    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }
}

let myUserDetails = new UserDetails("Syamil","Project Manager",10000);
console.log(myUserDetails.userName);
console.log(myUserDetails.jobPosition);
console.log(myUserDetails.salary);  