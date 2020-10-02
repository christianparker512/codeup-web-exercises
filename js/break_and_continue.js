
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