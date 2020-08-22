// below will throw an error bc typescript assumes that count needs to be a number (the initial value)
// let count = 5;
// count = 'bacon';
//below will  not throw an error. when you declare a var but don't define it, it can be anything in typescript. just declaring a variable (like with a below) defaults to 'any' type
// let a;
// a = true;
// a = 5;
// a = 'a string';
//you can also declare the variable type using the ':'. In this example any non-number assignment to a will be an error.
// let a: number;
// a = 6;
// a = false;
// a = 'hi';
// datatypes in typescript are:
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3]; (array of numabers)
// let f: any[] = [1, true, 'hi']; (array of anything)
// enum in TypeScript 
// enum Color { Red = 0, Green = 1, Blue = 2};
// let myColor = Color.Red; 
// type assertions -> telling typescript what type of variable you are dealing with so you can access all of methods you can access in a dropdown using <string> concatinated with the var name in this case
// let fat;
// fat = 'abc';
// let endsWithC = (<string>fat).endsWith('c');
// Arrow functions are super popular in typescript. if the function is one line, you don't even need the curley braces. 
// let aFunction = (parameter) => {
//     console.log(parameter)
// }
// interfaces help you define the shape of obects (the type of each piece of data in an object). for example:
// interface: Point {
//     x: number,
//     y: number
// }
// using this in a function looks like:
// let drawPoint = (point: Point) => {some stuff}
// drawPoint({x:1, y:2});
// here is a class example in typescript. Everything about the point is within the point class (all variables and related functions). When a function is part of a class
// we call it a method
var aThing = /** @class */ (function () {
    function aThing() {
    }
    aThing.prototype.draw = function () {
        console.log('X: ' + this.x + " Y: " + this.y);
    };
    aThing.prototype.anotherFunction = function () {
    };
    return aThing;
}());
;
// using a class in action
var newThing = new aThing();
newThing.x = 1;
newThing.y = 17;
newThing.draw();
