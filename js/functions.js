"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return 'Hello, ' + name;
}


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Vivian!");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Chris";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**

 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(num){
    return num === 2;
}
console.log(random);
console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(percentage,total){
        return percentage * total;
}


console.log(calculateTip(.20, 20));
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.15, 33.42));


 // * TODO:
 // * Use prompt and alert in combination with your calculateTip function to
 // * prompt the user for the bill total and a percentage they would like to tip,
 // * then display the dollar amount they should tip
 // */


var tip = Number(prompt("What percent do you want to tip? Enter a number from 1 to 100"));
var totalBill = Number(prompt("How much was your total bill?"));
var tipPercentage = (tip/100);
var tipDollars = calculateTip(tipPercentage, bill).toFixed(2);
alert("You should leave $ " + tipDollars + " on your $" + totalBill + " bill");


var mealTotal = prompt("How much was your meal?" +
    "\n(Numbers and decimal point only please; no dollar sign thanks.");
var levelSatisfied = prompt("What percentage would you like to tip? " +
    "\n(Just numbers please. No percentage sign needed.");
var finalTip = calculateTip(levelSatisfied, mealTotal);
var finalAmount = (+mealTotal + +finalTip).toFixed(2);
alert("We hope you enjoyed your meal. " +
    "Based on your answers, the tip would be $" + finalTip + "" +
    ".\nThat would bring the total amount to $" + finalAmount + ".");
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(price,discount) {
    return price - (price * discount);
}
    function applyDiscount(cost, cut){
        var price = Number(cost);
        var discount = parseFloat(cut);
        var discountedPrice = (price - (price * discount)).toFixed(2);
        return(discountedPrice);
    }
    var itemCost = prompt("What does the item cost?");
    var itemDiscount = prompt("What is the discount to be applied?");
    var finalCost = applyDiscount(itemCost, itemDiscount);
    alert("The discounted cost is $" + finalCost);0.12));