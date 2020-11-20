"use strict";


/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];
// // this is how we would have done it in the past with a for each loop
// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number + 1);
// });

// console.log(newArray);
// with a .map it's going to be slightly differnet.'
// filter is an enhanced forEach loop
// TODO TOGETHER: Let's map through the array of numbers and add 1 to each element. Console log the new copy of the array.
let newArray = numbers.map(function(num){
    return num +1;
})
console.log(newArray);
//TODO: Map through the new array of numbers and this time multiply each element by 3. Console log the new copy.
let newArrayTimesThree = newArray.map(function(num){
    return num * 3;
});

console.log(newArrayTimesThree);

// **** Madlibs javascript input can be created with array of of strings
var userInputs = ['Red','Dog', 'Orange'];

//Bonus: Refactor your functions using ES6
// Turn three lines of code into one
// let newArray = numbers.map(num=> num+1);

// let newArrayTimesThree = newArray.map(num => num*3);
// console.log(newArrayTimesThree);
/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];


// var numbers = [1, 2,3,4,5,6,7,8,10];
// var evens = numbers.filter(function(n){
//     return n % 2 === 0;
// });
// console.log(evens);


// TODO TOGETHER: Let's filter through our binary and return all the true values. We'll store the new array in a variable named 'ones'
const ones = binary.filter(function(x){
    return num === 1;
    // return x == true;
    // return x;
});

// TODO: filter through binary again and this time, return all the false values.
const zeros = binary.filter(function(x){
    return x === 0;
    // return x == false;
    // return !x;
});
console.log(zeroes);
//Bonus: Refactor your functions using ES6
const zeroes = binary.filter( x=> x ===1);
// Have to do the other one too.

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TODO: filter through the array of objects and return all fruit type objects.
const fruits = fruitsAndVeggies.filter(function(produce ){
    return produce.type === "fruit";
});
console.log(fruits);
// Es6
// const fruits = fruitsAndVeggies.filter(produce => produce.type === "fruit");
// TODO: filter through the array of objects and return all vegetable type objects.
const vegetables = fruitsAndVeggies.filter(function(produce){
    return produce.type === "vegetable";
});

// let vegetableObjects = fruitsAndVeggies.filter(type => )
/*********************************************
 *              .reduce
 ******************************************** */


//accumulation = 0
// add 1
//accumulation = 1
//add 2
//accumulation = 3
//add 3
//accumulation = 6
//add 4
//accumulation = 10
//add 5

// final accumulation = 15


// TODO TOGETHER: Let's reduce our original numbers Array into one single value.
const numbersArray = [1, 2, 3, 4, 5];

const sum = numbersArray.reduce(function(currentSum, currentNumber){
    console.log(currentSum);
    return currentSum + currentNumber;
}, 0);

console.log(sum);
// TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.
//     const diff = numbersArray.reduce(callback, starting point){
//     const diff = numbersArray.reduce(callback function(accumulator), starting point){
const diff = numbersArray.reduce(function(currentDifference, currentNumber){
    console.log(currentDifference);
    return currentDifference - currentNumber;}, 100);

//     ES6 syntax
// const diff = numbersArray.reduce((currentDifference, currentNumber)=> (currentDifference - currentNumber), 100);
const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TODO: Using .reduce, return the total number of apples.
// ****My attempt
const manzanas = shoppingCarts.reduce((total, cart) =>{
    console.log(manzanas)
    return total + cart.apples;
},0);
console.log(manzanas)


// let totalFruit = shoppingCarts.reduce(function(currentTotal:{}, cart:{}){
//     let apples = cart.apples;
//     let bananas = cart.bananas;
//     if(currentTotal[apples]=== undefined){
//         currentTotal.apples === apples;
//     }
// }, {})
const colors = ['red','orange','red','blue','blue','green','red'];

// TODO: Count the number of times a color appears in this Array. Hint: your initial value should be an empty object.

// const colorCount = colors.reduce(function(colorCount, color){
//     if(typeof colorCount[color] === "undefined") {
//         colorCount[color] = 1;
//     } else {
//         colorCount[color] +=1;
//     }
//     console.log(colorCount);
//     return colorCount;
//
// },{});

// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
// The default data type of our initial value is going to be whataver data type is of the elements we iterate over, unless specified otherwise.
const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TODO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce(function(currentString, word){
    return `${currentString} ${word}`
},'')

console.log(oneLine);

// ES6 syntax
// const oneLine =  lyrics.reduce((currentString, word) => `${currentString} ${word}`);
// console.log(oneLine);
// Bonus: Create an Array of all the unique fur colors! Hint: check out the ES6 'Set' data type.
// to transform a set into an Array: array.from(insertyourSetHere)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

    var hamsters = [
        {
            name: "Hamtaro",
            heightInMM: 86,
            fur: ['orange', 'white'],
            gender: "male",
            dateOfBirth: "August 6"
        } , {
            name: "Bijou",
            heightInMM: 75,
            fur: ['white'],
            gender: "female",
            dateOfBirth: "July 10"
        } , {
            name: "Oxnard",
            heightInMM: 100,
            fur: ['grey', 'white'],
            gender: "male",
            dateOfBirth: "May 3"
        } , {
            name: "Boss",
            heightInMM: 120,
            fur: ['brown', 'white'],
            gender: "male",
            dateOfBirth: "Spetember 21"
        } , {
            name: "Snoozer",
            heightInMM: 85,
            fur: ['brown', 'white', "pink"],
            gender: "male",
            dateOfBirth: "January 14"
        }
    ];