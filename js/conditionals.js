"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(input){
    if (input === "blue") {
        return input + " is the color of the sky";
    } else if (input === "red"){
        return "Strawberries are " + input;
    } else if (input === "cyan"){
        return "I don't know anything about " + input;
    } else {
        return "I don't know anything about " + input + " either. Sorry!"
    }
}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("Your random color is " + randomColor + "You should refresh the page")
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(input){
    switch(input.toLowerCase()){
        case "blue":
            return "It's blue";
        case "red":
            return "Strawberries are red";
        case "cyan":
            return "I don't know anything about cyan";
        default:
            return "you messed up"
    }
}
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("yellow"));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color = prompt("Please enter a color: ");
alert(analyzeColorSwitch(color));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 1){
        return "Congratulations!" + " Your number is: " + luckyNumber + ". Your price before discount was " + totalAmount + ". You receive a 10% Discount! Your total price is: $" + (totalAmount - (totalAmount * .1));
    }
    else if (luckyNumber === 2) {
        return "Congratulations!" + " Your number is: " + luckyNumber + ". Your price before discount was " + totalAmount + ". You receive a 25% Discount! Your total price is: $" + (totalAmount - (totalAmount * .25));
    }
    else if(luckyNumber === 3){
        return "Congratulations!" + " Your number is: " + luckyNumber + ". Your price before discount was " + totalAmount + ". You receive a 35% Discount! Your total price is: $" + (totalAmount - (totalAmount * .35));
    }
    else if(luckyNumber === 4){
        return "Congratulations!" + " Your number is: " + luckyNumber + ". Your price before discount was " + totalAmount + ". You receive a 50% Discount! Your total price is: $" + (totalAmount * .50);
    }
    else if(luckyNumber === 5) {
        return "Congratulations!" + " Your number is: " + luckyNumber + ". Your price before discount was " + totalAmount + ". You receive a 100% Discount! Your don't have to pay for anything";
    }
    else{
        return "Sorry, but you didn't receive a discount. Your total price is: $" + totalAmount;
    }
}
console.log(calculateTotal(3,100));


console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));

function calculateTotal(luckyNumber, totalAmount) {
    switch(luckyNumber) {
        case 0:
            return totalAmount;
        case 1:
            // 10% discount
            return totalAmount * (1 - .1);
            break;
        case 2:
            // 25% discount
            return totalAmount * (1 - .25);
            break;
        case 3:
            return totalAmount * (1 - .35);
            break;
        case 4:
            return totalAmount * (1 - .5);
            break;
        case 5:
            return 0;
            break;
        default:
            return false;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
var luckyNumber = Math.floor(Math.random() * 6);
console.log(calculateTotal(luckyNumber, 100));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function playAGame(){
    var playGame = confirm("Would you like to play a game?");
    if (playGame) {
        var userNumber = prompt("Please enter a whole number without decimals:")
        if(isNaN(userNumber)){
            alert("That was not a number.")
        } else {
            var evenOdd = (userNumber % 2 === 0) ? "Your number is even." : "Your number is odd."
            var positiveNegative = (userNumber > 0) ? "Your number is positive" : "Your number is negative"
            alert(evenOdd)
            alert(positiveNegative)
            alert("Your number plus 100 is " + (parseInt(userNumber) + 100))
        }
    } else {
        alert("Party pooper!")
    }
}
playAGame();