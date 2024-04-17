// const firstNumber = prompt("Enter the first number: ");
// const secondNumber =  prompt("Enter the second number: ");

// let total = parseFloat(firstNumber) + parseFloat(secondNumber);
// alert(total);





// adding a function to the html using the getElementById("")

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
let name = "gift";

//Numbers
let num1 = 60; //int
let num2 = 60.2; //float

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

//date object

// const date = new(date);


//Concepts of data types

let h = 16 + "volvo";


//typeof

let userName ="wale";
console.log(typeof userName);

let eatenYet = true;
console.log(typeof eatenYet);

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
