"use strict";
class UserRole {
    constructor(_userName, _passWord) {
        this._userName = _userName;
        this._passWord = _passWord;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get passWord() {
        return this._passWord;
    }
    set passWord(value) {
        this._passWord = value;
    }
}
let user = new UserRole("Syamil", "123Pass");
console.log(user.userName);
console.log(user.passWord);
