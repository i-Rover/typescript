"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
//declare an array of coaches...initially empty
let myCoaches = [];
//add coaches to the array
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);
for (let myCoach of myCoaches) {
    console.log(myCoach.getDailyWorkout());
    console.log();
}
