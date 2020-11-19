// // * **************************************************************
// // *
// // *       Object Property Variable Assignment Shorthand
// // *
// // *****************************************************************/
// //TODO TOGETHER: Create a newDog object using shorthand syntax
//
// let breed = "Pug";
// let age = 3;
// let dogName = "Lexie";
// let isCute = true;
//
// //old way
// let oldDog = {
// 	breed: breed,
// 	age: age,
// 	dogName: dogName,
// 	isCute: isCute
// }
//
// console.log(oldDog);
// //
// let newDog = {
//     breed,
//     age,
//     dogName,
//     isCute
// }


//
// var personA = {
// 	name: 'codeup',
// 	age: 4
// };
//
// // old way
//
// var name = personA.name;
// var age = personA.age;
//
//
// console.log(name); // 'codeup'
// console.log(age); // 4
//
//
// //TODO TOGETHER: REFACTOR the above approach using ES6
//
// const {name, age} = personA;
// console.log(name);
// console.log(age);



    /*==============================================*/

//
//     const pals = {
//         dog: "Spike",
//         cat: "Tom",
//         mouse: "Jerry"
//     };
//
// //old way
// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;
//
//
// This is the new refractored way. You have your const and your different values below.

//TODO TOGETHER: REFACTOR the above approach using ES6
//new way
// const{dog, cat, mouse} = pals;
//
// console.log(myDog); //Spike
// console.log(myCat); //Tom
// console.log(myMouse); //Jerry





    /*==============================================*/

//TODO: Use object destructuring with the following object

    const theFlash = {
        name: "Barry Allen",
        alias: "The Flash",
        occupation: "Forensic Scientist",
        powers: "Super Speed"
    }

const{name, alias, occupation, powers} = theFlash



    /*==============================================*/
//Destructuring with Arrays

    let cats = ["CJ", "Claude", "Max"];

//oldway
// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];


//new way
    let [ cat1, cat2, cat3 ] = cats;

console.log(cat1);
// console.log(cat2);
console.log(cat3);


    /*==============================================*/

    const alphabet = ['A', 'B', 'C', 'D', 'E'];

//old way
// const a = alphabet[0];
// const b = alphabet[1];
// const c = alphabet[2];


//TODO TOGETHER: new way
// if you want to skip something in the array, you can leave it out of the array, but you need to include the comma
// const [a,b,c] = alphabet

//TODO TOGETHER: To skip an element...
// const[a,b, ,d]=alphabet
//TODO TOGETHER: To get all elements...Spread operator *BONUS

const[a, b, c, ... rest]=alphabet
console.log(rest);


    /*==============================================*/
// Using with functions


//old way
// function tellMeAbout(person) {
// 	var name = person.name;
// 	var age = person.age;
// 	console.log(name); // 'codeup'
// 	console.log(age); // 4
// }


//new way
    function tellMeAbout({name, age}){
    console.log(name);
    console.log(age);
}

const person = {
    name: 'codeup',
    age: 4
};
tellMeAbout(person);
/*==============================================*/

function getArea({height, width}){
    return height * width;
}
let shape1 = {
    height: 10,
    width: 10
}

let shape2 = {
    height: 5,
    width: 5
}

console.log(getArea(shape1)); //100
console.log(getArea(shape2)); //25


//TODO: Refactor the getArea function from above using arrow syntax













