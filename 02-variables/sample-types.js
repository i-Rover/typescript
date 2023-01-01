var search = true;
var score = 88.6;
var fName = "Syamil";
var lName = "Zamzuri";
var myARRs = [99, 50, 40.1, 13];
var grandTotal = 0;
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
console.log("Bye ".concat(fName, " ").concat(lName));
for (var i = 0; i < myARRs.length; i++) {
    console.log(myARRs[i]);
    grandTotal += myARRs[i];
}
var average = grandTotal / myARRs.length;
console.log("Review average ".concat(average));
var mySports = ["Golf", "Tennis", "Swimming"];
for (var _i = 0, mySports_1 = mySports; _i < mySports_1.length; _i++) {
    var mySport = mySports_1[_i];
    console.log(mySport);
}
var myCars = ["lambhorghini", "Ferrari", "buggati"];
myCars.push("Mazda");
myCars.push("BMW");
for (var _a = 0, myCars_1 = myCars; _a < myCars_1.length; _a++) {
    var myCar = myCars_1[_a];
    console.log(myCar);
}
