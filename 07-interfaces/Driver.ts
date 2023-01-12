import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//declare an array of coaches...initially empty
let myCoaches : Coach[] = [];

//add coaches to the array
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);

for(let myCoach of myCoaches){
    console.log(myCoach.getDailyWorkout());
    console.log();
}