"use strict";
console.log("Hello from the external javascript!");

alert("Welcome to my Website!");

var userColor = prompt("What is your favorite color?");
alert("That's great! My favorite color is " + userColor + ", too!");

confirm("The movie store charges $3.00 a day. Is that okay?");
var userLittleMermaid = Number(prompt("How many days did you rent LittleMermaid?"));
var userBrotherBear = Number(prompt("How many days did you rent Brother Bear?"));
var userHercules = Number(prompt("How many days did you rent Hercules?"));

alert("Your total rental charge is " + ((3 * userLittleMermaid) + (3 * userBrotherBear) + (3 * userHercules)));
var totalcost = (userLittleMermaid + userBrotherBear + userHercules);
var alertMessage = "You owe: $" + totalCost.toFixed(2);

var facebookHours = Number(prompt("How many hours did you work at Facebook?"));
var googleHours = Number(prompt("How many hours did you work at Google?"));
var amazonHours = Number(prompt("How many hours did you work at Amazon?"));
var facebookRate = Number(prompt("What was your hourly rate at Facebook?"));
var googleRate = Number(prompt("What was your hourly rate at Google?"));
var amazonRate = Number(prompt("What was your hourly rate at Amazon?"));

alert("This week's pay was $" +(facebookHours * facebookRate) + (googleHours * googleRate) + (amazonHours * amazonRate));


alert("Let's see if you can add this class?");
var classCount = "How many classes are you currently enrolled in?";


3.3
var classIsNotFull = confirm("Class is not full"); //boolean
var classScheduleDoesNotConflict = confirm("Schedule does not conflict?"); //boolean
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict
var alertMessage = "Student enrolled: " + studentEnrolled;
alert(alertMessage);

var isConflict = prompt("Do you have a conflict?");
var canEnroll = !isClassFull && !isConflict;
var maxClassSize = Number(prompt("What's the max class size?"));
var currentClassSize = Number(prompt("How many are in the class?"))
var isClassFull = (currentClassSize < maxClassSize);

if (canEnroll = true){
    alert("Congratulations! You can enroll! :)");
} else {
    alert("Sorry, you can't enroll! :(");
}

var x = prompt("How many students can enroll in this class?")
var classFull = x.maxValue

var currentSchedule = confirm("Does your current schedule have room for this class?")
if (!classFull && currentSchedule) {
    alert("You can enroll in this class.")
} else {
    alert("You can't enroll in this class")
}

var premiumMember = confirm("Are you a premium member?");
var offerValid = confirm ("Is this offer valid");
var purchase = prompt ("How many items did you purchase")
    if (premiumMember && offerValid) {
        alert("Offer Applied")
            else if(purchase >= 2 && offerValid) { alert("Offer Applied")
            else {alert ("Offer Not Applied" )
            }
        }
    }

// 3.4
// offer has to be offer offerValidif they are a premium, number of items don't matter
//     if they are not a premium member, they must buy more than 2 items have to use or

var numberOfItems = Number(prompt("How many items for checkout?"));
var isTheOfferValid = confirm("Is the offer valid?");
var isPremiumMember = confirm("Are you a premium member?");
var discountApplied = isTheOfferValid && (isPremiumMember || numberOfItems > 2);

alert("Product discount: " + discountApplied);