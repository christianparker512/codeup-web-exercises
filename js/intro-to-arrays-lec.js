"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`


//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];
console.log[pies];
var pies = ["apple","cherry","key lime", "huckleberry"]

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];

var shapes = ["square", "rectangle", "circle", "triangle"]
console.log(shapes);
// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]

var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
var daysOfTheWeek = ["monday","tuesday", "wednesday", "thurdsay", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFoods = ["snapper", "steak", "tuna", "mangoes", "burgers"];
console.log(favoriteFoods);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

// TODO: console.log the length of the instructors array
// TODO: console.log the length of the daysOfTheWeek array
// TODO: console.log the length of the favoriteFoods array

console.log(instructors.length);
console.log(daysOfTheWeek.length);
console.log(favoriteFoods.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
	console.log(shapes[0]);
	console.log(shapes[1]);
	console.log(shapes[2]);
	console.log(shapes[3]);
	console.log(shapes[4]);

// square
// rectangle
// circle
// triangle
// TODO: console.log each element of the instructors array
// TODO: console.log the first three elements of the daysOfTheWeek array
// TODO: console.log the first three elements of the favoriteFoods array
console.log(instructors[0]);
console.log(instructors[1]);
console.log(instructors[2]);
console.log(instructors[3]);
console.log(instructors[4]);
console.log(instructors[5]);
console.log(instructors[6]);

console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[2]);
console.log(daysOfTheWeek[3]);
console.log(daysOfTheWeek[4]);
console.log(daysOfTheWeek[5]);
console.log(daysOfTheWeek[6]);

console.log(favoriteFoods[0]);
console.log(favoriteFoods[1]);
console.log(favoriteFoods[2]);
console.log(favoriteFoods[3]);
console.log(favoriteFoods[4]);


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array



/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array


// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
for (var i = 0; i < shapes.length; i++){
	console.log("==============");
	console.log("current iteration: " + i);
	console.log(shapes[i]);
}

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

// for(var i = 0; i < shapes.length; i++){
// 	if(shapes[i] === "triangle"){
// 		alert(shapes[i] + "s are my favorite shapes");
// 	}
// }
// TODO: What happens if we change var i = 1? or var i = 2;
for(var i = 1; i < shapes.length; i++){
	if(shapes[i] === "triangle"){
		alert(shapes[i] + "s are my favorite shapes");
	}
}
// TODO: What are benefits of using loops to iterate?
// It can save you time typing, not hard coded, you don'tknow what is in the array to use the array
// TODO: How does the loop know when to stop iterating?
// the loop knows when to stop iterating when it meets the conditional

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
// for(var i = 0; i < instructors.length; i++){
// 	if
// 	console.log(instructors[i] + " is a great instructor!")
// }
// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
for(var i = 0; i < daysOfTheWeek.length; i++){
	console.log(daysOfTheWeek[i] + " is a great instructor!")
}
// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

// TODO: Refactorifor(var i = 0; i < instructors.length; i++){
// 	console.log(instructors[i] + " is a great instructor!")
// }ng the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"

function returnLastElement(array){
	return array[array.length -1];
}
console.log(returnLastElement(instructors));
console.log(returnLastElement(daysOfTheWeek));

/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function (shape, index, array){
	console.log(shape);
	console.log(array);
	console.log(index);
})
// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];
pies.forEach(function(pie){
	console.log(pie);
})
// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function(instructor){
	console.log(instructor);
})

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function(day){
	console.log(day)
})
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoriteFoods.forEach(function(food){
	console.log(food)
})