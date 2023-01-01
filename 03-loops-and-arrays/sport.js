var sportsOne = ["Golf", "Swimming", "Cricket"];
// for(let i=0;i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }
//lets use simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log("".concat(tempSport, " << My Favourite"));
    }
    else {
        console.log(tempSport);
    }
}
