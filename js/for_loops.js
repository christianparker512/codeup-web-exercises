"use strict";
// function showMultiplicationTable(num){
//     for (var i =1 ; i<=10; i++) {
//         console.log(i + "x" + num + " = " + i * num);
//     }
// }


// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * (200 - 20)) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is an even number")
    } else {
        console.log(randomNumber + " is an odd number")
    }

}
// 4. Create a for loop that uses console.log to create the output shown below.
function numberPyramid() {
    var str = ''
    for (var i = 1; i < 10; i++) {
        var j = i.toString()
        str += j.repeat(i);

        if (i !== 9) str += '\n'
    }
    return str;
}
console.log(numberPyramid());

// }
// 5. Create a for loop that uses console.log to create the output shown below.
for (var i = 100; i>0; i--){
    if (i%5 ===0){
        console.log(i);
    }
}