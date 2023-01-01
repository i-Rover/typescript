class UserDetails {
    constructor(_userName, _jobPosition, _salary) {
        this._userName = _userName;
        this._jobPosition = _jobPosition;
        this._salary = _salary;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get jobPosition() {
        return this._jobPosition;
    }
    set jobPosition(value) {
        this._jobPosition = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
}
let myUserDetails = new UserDetails("Syamil", "Project Manager", 10000);
console.log(myUserDetails.userName);
console.log(myUserDetails.jobPosition);
console.log(myUserDetails.salary);
