// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
var response = prompt("Please enter an odd number between 1 and 50");
for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (response == i) {
        console.log("Yikes!! Number to skip is: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
    if (i >= 51) {
        break;
    }
}

// do {
//     var userNumber = Number(prompt("Pick an odd number between 1 and 50"));
//    if(userNumber < 1 || userNumber > 50){
//        alert("Number is invalid. Please try again.");
//    } else if (if userNumber % 2 === 0) {
//        alert(userNumber + " is not odd, please try again.");
//
//    } else if(isNana(userNumber)) {
//            alert(userNumber + " is not a number, please try again."
//    } else {
//        alert("Number is valid! Thank you!";
//        break;
//    }
// } while(true);
//
// for (var i =1; i <= 50; i ++){
//     if (i % 2 === 0) {
//         continue;
//     }
//     if(i === userNumber){
//         console.log("Yikes! Skipping number: " +1);
//     } else {
//         console.log("Here is an odd number: " +1);
//     }
// }