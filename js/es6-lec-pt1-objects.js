"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/

function checkWeather(isRaining) {
    if (isRaining) {
        var umbrella = "Get an umbrella"
    } else {
        var sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

// checkWeather(false); //undefined



function checkWeatherTwo(isRaining) {
    if (isRaining) {
        const umbrella = "Get an umbrella"
    } else {
        const sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

// checkWeatherTwo(false) //Uncaught ReferenceError: umbrella is not defined


/*==============================================*/


let instructor = 'Vivian';
instructor = 'Sophie';
console.log(instructor); //Sophie




const instructor = 'Vivian';
console.log(instructor); // Vivian
instructor = 'Sophie';
console.log(instructor); // Uncaught TypeError: Assignment to constant variable.



/*==============================================*/




/*
* let and const (block scope vs. function scope)
*/

{
    var a = 10;
}
{
    let b = 20;
}

const c = 30;

console.log(a); // 10
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c += 3); //Uncaught TypeError: Assignment to constant variable.





/*==============================================*/




// if (false) {
//    var x = 2; //Undefined
// }

// if (false) {
//     let x = 2; //Uncaught ReferenceError: x is not defined
// }

// console.log(x);




/*****************************
 *    Template Strings
 *****************************/

//oldway
let firstName = "Vivian";
let lastName = "Canales";
let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';

// console.log(greeting);

//TODO: Refactor code from above, using template strings.
let newGreeting = `Hello my name is ${firstName} ${lastName}.toUpperCase()`
console.log(newGreeting);






/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

let items = ['apple', 'grape', 'orange'];


//old way
let itemsHtml = "";
itemsHtml += "<ul>";
itemsHtml += "<li>" + items[0]+ "</li>"
itemsHtml += "<li>" + items[1]+ "</li>"
itemsHtml += "<li>" + items[2]+ "</li>"
itemsHtml += "</ul>";

// console.log(itemsHtml);

// let fridge = `My fridge has ${itemsHtml} inside it.`
// console.log(itemsHtml);

//new way
let newItemsHthml = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
        <li>${items[2]}</li>
    </ul>
        `;

    console.log(newItemsHtml);






/*==============================================*/

//TODO: Create a paragraph from the following program object

let program = {
    name: "Codeup",
    location: "Dallas and San Antonio",
    length: "20 weeks",
    technology: "HTML, CSS, JS, Java"
}

let programLetter = `Hello and thank you for your interest in ${program.name}.

Our program is located in ${program.location}. The program lasts ${program.length}`

console.log(programLetter);

/*****************************
 *       For Of Loops
 *****************************/


const arr = ["one", "two", "three"];
for (let ele of arr) {
    console.log(ele);
}


/*==============================================*/
//TODO: Using for of loops, log each instructors name

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

for (let day of days){
    console.log(days);
}




/*==============================================*/

//TODO: Using for of loops, log each instructors name

// const instructors = ["Vivian", "Sophie", "Justin", "Casey", "David"]

for (let instructor of instructors){
    console.log(instructor);
}



/* ****************************
 *       Arrow Functions
 *****************************/
//TODO TOGETHER: Rewrite the following function using arrow function syntax


function sayHello(name){
    return `Hello ${name}`;
}





// console.log(sayHelloAgain("Vivian")); //Hello Vivian
// console.log(sayHelloAgain("Justin")); //Hello Justin
// console.log(sayHelloAgain("Sophie")); //Hello Sophie



/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

function sum(a,b){
    return a + b;
}



// console.log(sum(5, 3)); //8
// console.log(sum(5, 20)); //25
// console.log(sum(1, 9)); //10




/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax

// function addOne(arg1) {
//     return arg1 + 1;
// }

function addOne(arg1){
    return arg1 +1;
}
// example to an function expression
let addOneA = function(arg1){
    return arg1 +1;
}
// console.log should be 2 and 3

// refactor REMOVE FUNCTION KEYWORD AND ADD ARROW SYNTAX =>
let addOneB = (arg1) => {
    return arg1 +1;
}

// refactored even more BY REMOVING CURLY BRACES (IF ONLY ONE STATEMENT).
// with one statement syntax that whatever is after arrow, it is assumed that the last piece takes the place of the return
let addOneC = (arg1) =>  arg1 +1;

// remove parenthesis if only 1 input
// This is used in react and any modern javascript framework
let addOneD = arg1 => arg1 + 1;

console.log(addOne(1));
// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(2));
// console.log(addOneD(2));






/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// old way
function sayHello(name) {
    if (typeof name === 'undefined') {
        name = 'World';
    }
    return 'Hello, ' + name + '!';
}




// console.log(sayHello());; // "Hello, World!"
// console.log(sayHello('codeup'));; // "Hello, codeup!"



/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

function helloCohort(greeting, cohort){
    if(typeof greeting === "undefined"){
        greeting = "Good Morning";
    }
    if(typeof cohort === "undefined"){
        cohort = "Jupiter";
    }

    return greeting + " " + cohort;
}

