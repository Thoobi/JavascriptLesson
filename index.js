// const firstNumber = prompt("Enter the first number: ");
// const secondNumber =  prompt("Enter the second number: ");

// let total = parseFloat(firstNumber) + parseFloat(secondNumber);
// alert(total);





// adding a function to the html using the document.getElementById("")
//parseFloat to convert string to an integer(int)
//.value tells the variable that this is a value

function total()
{
    const first = parseFloat(document.getElementById("firstNumber").value);
    const second = parseFloat(document.getElementById("secondNumber").value);
    let totalNum = first + second;

    alert(totalNum);
    console.log(totalNum);
}

//variable keywords definition

var name1 = "jiohn"; //var
let name2 = "gift"; //let
const king = "solomon"; //const
let user = 'john';

//Data types
//String 
const stolenName = "Wilis";
let name = "gift";

//Numbers
let num1 = 60; //int
let num2 = 60.2; //float
const num3 = 7; //still a number datatype just a different keyword

//Booleans
let x = true; //true
let y = false; // false

//Object
const person = {
    firstName: "John", //key: value, pairs
    lastName: "luke", //key: value, pairs
}
// Array;
const myArray =["wale", "john", "luke"];
const myArray1=[200, 300, 400, 500, 600];

//date object

// const date = new(date);


//Concepts of data types
let h = 16 + "volvo"; //This reads 16 as a string and needs to be converted


//typeof
let userName ="wale";
console.log(typeof userName); //outputs a string


let eatenYet = true;
console.log(typeof eatenYet); //outputs Boolean

let realAge = 28;
console.log(typeof realAge); //outputs Number

//operators
//+ 
//-
//*
///

//concatenation (+)
let firstName = "John";
let lastName = "Lucas";

let fullName = firstName + " " + lastName;
console.log(fullName);

//Length and index


let fullName1 = "This is clubhouse";
console.log(fullName1.length);

//index //counts start from zero
console.log(fullName1[0]);
console.log(fullName1[2] + "g");

//string Replace
let url ="https://www.udemy.com";
//what to replace after the comma come what we would replace it with!
// console.log(var_name.replace(select what to replace with what it would be replaced with));
console.log(url.replace("https://", "")); //Outputs www.udemy.com

let userName1 = "Gravitty";
console.log(userName1.replace("G", "Z")); // Outputs Zravitty

//Data types - Number
var birthYear = 2000;
var price = 78.50;
var temperature = -17;

//Means 2 x 10 raise to power 45
    var bigNumber = 2e45; //Large number in javascript can be represented by the exponential notation (e).

//Basic maths operations
    var num5 = 20;
    var num6 = 3;

    var sum = num1 + num2;
    var subtraction = num1 - num2;
    var division = num1 / num2;
    var multiplication = num1 * num2;

    var average = (num1 + num2) / 2;

    /*
    Parenthesis can be used to form expressions. 
    In this case it was used to define the order of the operations. 
    Without parenthesis, the division would have been done before the sum,
    resulting in an incorrect average.
    */

//The Math object
//We can do more advanced operations using 
//The built-in Math object and its methods

var power = Math.pow(2, 4); //This does 2 raise to power 4
console.log(power); //Outputs 16

var roundedNumber =Math.round(2.7); //Rounds to the nearest integer 
console.log(roundedNumber); //Outputs 3

var roundUp = Math.ceil(4.3); //Rounds to the next integer.
console.log(roundUp); //Outputs 5

var roundDown = Math.floor(4.6); //Rounds to the current integer
console.log(roundDown); //Outputs 4

var squareRoot = Math.sqrt(36) // Square root.
console.log(squareRoot); //Outputs 6

var randomNumber = Math.random() 
console.log(randomNumber); // The result is a random number between 0 and 1

//Methods of the number object

var myNumber = 3.78633;
// toFixed() rounds it to a fixed number of decimal places
console.log( myNumber.toFixed(2) ); // will show 3.79
console.log( myNumber.toFixed(4) ); // will show 3.7863

var myNumber = 325;
var myNumber2 = 123;
//The toString() method returns a number as a string.
console.log( myNumber.toString()); // will show 325
console.log( myNumber.toString()); // will show 123

var myNumber = 3.579388;
var myNumber2 = 1.632;
//toPrecision() returns a string, with a number written with a specified length:
console.log( myNumber.toPrecision(2)); // will show 3.5
console.log( myNumber.toPrecision(5)); // will show 1.6320

//Converting Variables to Numbers
// Number()	Returns a number converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns a whole number
