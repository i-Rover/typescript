import {Shape} from './Shape'
import {Circle} from './Circle'
import {Rectangle} from './Rectangle'

let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(1,2,3,4);

//declare an array of shapes ... initially empty
let theShapes: Shape[] = [];

//add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let myShape of theShapes){
    console.log(myShape.getInfo());
    console.log(myShape.calculateArea());
    console.log();
}