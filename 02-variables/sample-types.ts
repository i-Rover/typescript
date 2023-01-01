let search: boolean = true;
let score: number = 88.6;
let fName: string = "Syamil";
let lName: string = "Zamzuri";
let myARRs: number[] = [99,50,40.1,13];
let grandTotal: number = 0;
//let's break it
// search = 0;
// grade = "A";
// fName = 123;
// lName = false;

console.log(search);
console.log(score);
console.log(fName);
console.log(lName);

//use template strings
console.log(`Bye ${fName} ${lName}`);

for(let i=0;i<myARRs.length;i++){
    console.log(myARRs[i]);
    grandTotal+=myARRs[i];
}

let average: number = grandTotal / myARRs.length;
console.log(`Review average ${average}`);

let mySports : string[] = ["Golf","Tennis","Swimming"];
for(let mySport of mySports){
    console.log(mySport);
}

let myCars: string[] = ["lambhorghini","Ferrari","buggati"];
myCars.push("Mazda");
myCars.push("BMW");
for(let myCar of myCars){
    console.log(myCar);
}