// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// var response = prompt("Please enter an odd number between 1 and 50");
for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (response == i) {
        console.log("Yikes!! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
    if (i >= 51) {
        break;
    }
}