export class UserRole{
    
    constructor(private _userName:string,private _passWord:string){
    }

    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }

    public get passWord(): string {
        return this._passWord;
    }
    public set passWord(value: string) {
        this._passWord = value;
    }

}