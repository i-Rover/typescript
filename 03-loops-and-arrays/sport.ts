let sportsOne: string[] = ["Golf","Swimming","Cricket"];

// for(let i=0;i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }

//lets use simplified for loop

for(let tempSport of sportsOne){
    if(tempSport == "Cricket"){
        console.log(`${tempSport} << My Favourite`);
    }else{
        console.log(tempSport);
    }
}