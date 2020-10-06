var pies = ["apples", "cherry","key lime", "huckleberry","rhubarb"]

pies.forEach(function(pies){
   console.log(pies);
});

//this is how we add an item to the beginning of an array
pies.unshift("blueberry");
console.log(pies);

//this is how we add an item to the end of an array
pies.push("chocolate");
console.log(pies);

//this is how we remove items from an array.
pies.shift("cherry");

//this is how we remove items from an item off the end of an array.
pies.pop();

// how to take something from the end of the array and put it on the beginning of the array
var poppedElement = pies.pop();
pies.unshift(poppedElement);
console.log(pies);

pies.indexOf("key lime");
console.log(pies.indexOf('key lime'))

// trying to find the first index of keylime in the array and below is the last

pies.lastIndexOf("key lime")

// slicing
console.log(pies.slice());

pies.slice(1);
// slice does not mutate an array

pies.slice(2);
pies.slice(0,3);
// This takes it out of the array but doesn't manipulate the array.

// function lastThreePies(pies){
//     var pies = [     "apple",     "cherry",     "key lime",     "huckleberry",     "rhubarb",     "key lime" ];
//     return pies.slice(0,1,2);
// }
// console.log(pies.slice(0,1,2));

// function lastThree(arr){
//     return arr.slice(arr.length - 3);
// }

pies.reverse();
console.log(pies);

var pies = ["cherry","apple","hucklebery","rhubarb", "key lime"];

console.log (pies);
pies.sort();

var numbers = [1,]

var names = "Bob Sally Mary";
var namesArr = namesArr.split(" ");
console.log(namesArr);

//
//
// create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Log the output

var phoneNumbers= '210-555-2020 \n230-555-5555\n5126891720';

function cleanPhoneNumbers(phoneNums) {
   var output = [];
   // split input on newline character into an array of numbers
   var phoneNumsAar = phoneNums.split('\n');
   phoneNums.forEach(function(phoneNum){
      var phoneNumArr = phoneNum.split('-');
      // combine into a single string without dashes
      var phoneNumWithOutDashes = phoneNumArr.join();
      output.push(phoneNumWithOutDashes);
      console.log(phoneNumArr);
   });
   return output;
}