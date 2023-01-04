"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
//declare an array of shapes ... initially empty
let theShapes = [];
//add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let myShape of theShapes) {
    console.log(myShape.getInfo());
    console.log(myShape.calculateArea());
    console.log();
}
