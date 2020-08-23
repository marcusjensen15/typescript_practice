

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

// class aThing {
//     x: number;
//     y: number;

//     draw() { console.log( 'X: ' + this.x + " Y: " + this.y); 
//     }

//     anotherFunction() { //...
//     }
// };

// using a class in action
//AN OBJECT IS AN INSTANCE OF A CLASS

// let newThing = new aThing();

// newThing.x = 1;
// newThing.y = 17;
// newThing.draw();

// Below is how to use a Constructor in TypeScript. Constructors are methods that are called every time you create a new instance of a class 'constructor' is a reserved keyword in TS. You can make paramaters optional by appending 
// a '?' within the paramater definition area. for example if we wanted to make the arguments optional values in the constructor below, it would look like this:

// constructor(x?: number, y?: number){
//     this.x =x;
//     this.y = y;
// }

class Something {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x =x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }
}

//below creating a new instance of the class using the constructor. we need to feed it some arguments  (in this case 1 and 2)

let fred = new Something(1,2);

fred.draw();



//An 'Access Modifier' allows you to allow how 'mutiable' pieces of an object are within the class definition. For example, if you wanted variable 'x' to never be modified ever,
// but you wanted variable 'y' to be muted at some point publically. In TS, the 3 Access Modifiers are 'Public, Private, and Protected'. Public and Private are most common. By default they are all Public

// You can make a variable private in class defination by using the keyword 'private, as below. X is private. X will not be accessable. 
//You can set access modifiers on fields, properties and methods
// The getX() method will be able to be called from the outside and return value of x

// class AnotherThingy {
//     private x: number;
//     y: number;

    //constructor(private x?: number, private y?: number){

    // }

    // getX(){
    //     return this.x;
    // }
// }

// let anExample = new AnotherThingy(2,5);

// will sucesfully return value of x even thought it is private.

//  