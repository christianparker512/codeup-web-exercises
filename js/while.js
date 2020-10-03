"use strict";

var i = 2;
do {
    console.log(i);
    i *=2;
} while (i <= 65536);

function conesToSellForTheDay(){
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        var customerPurchase = Math.floor(Math.random() * 5) + 1;
        if (allCones === 0) {
            console.log("Sorry, there are no more cones!");
            break;
        } else if (customerPurchase > allCones) {
            console.log("Sorry, I can't sell " + customerPurchase + "I only have " + allCones + "cones");
        } else {
            console.log("You're in luck, I have " + allCones + ".  I can sell you " + customerPurchase + " cones");
        }
    } while (allCones >0);
}



