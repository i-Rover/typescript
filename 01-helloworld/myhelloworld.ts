console.log("Hello World!");
console.log("Hi there!" + "How are you?");

let found : boolean = true;
let grade: number = 22.7;
let firstName: string = "Syamil";
let lastName: string = "Zamzuri";
let space: any = " ";
let myJSONs = {
    name:"Syamil Zamzuri",
    age:14
};

console.log(found);
console.log(grade);
console.log(firstName+space+lastName);
console.log(myJSONs);
console.error(`Hi ${firstName} ${lastName}`);
console.warn(`Hi my name is ${myJSONs.name} and my age is ${myJSONs.age}`);