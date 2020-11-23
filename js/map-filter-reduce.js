"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// **** Example from the lecture on how to refractor into es6
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let newArray = numbers.map(function(num){
//     return num +1;
// })
// let newArray = numbers.map(num=> num+1);

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// const fruits = fruitsAndVeggies.filter(function(produce ){
//     return produce.type === "fruit";
// });
// const filteredUsers = users.filter((user) => {
//     if(user.languages.length >=3){return true;
// //     }else {
// //         return false;
// //     });

//     }
// )
let threeLanguages = users.filter(function({languages}) {
//     if(user.languages.length >=3){return true;
//     }else {
//         return false;
//     });


    return languages.length >= 3;
    // *** ES6 Refractoring
    // let threeLanguages = users.filter(user => user.languages.length >=3)
// let threeLanguages = users.filter(({languages}) => languages.length >=3)

});
console.log(threeLanguages)

// 3. Use .map to create an array of strings where each element is a user's email address

let arrayOfEmails = users.map(function({email}) {
    return email;
    // *** ES6 Refactoring
// let arrayOfEmails = users.map(({email}) => email)
});
console.log(arrayOfEmails);
// justin's solution'
// const emails = users.map(user =>{
//     return user.email;
// });
// console.log(emails);

// Justin's ES6
// const emails = users.map(user=>{ return user.email;
// });

// const emails = users.map(({email}) => { return email;});
// console.log(emails);
// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
function averageYears () {
    // const totalSales = salesPeople.reduce((total, person) => {
    //     return total + person.sales;
    // }, 0);
    const totalYears = users.reduce((total, {yearsOfExperience}) => total + yearsOfExperience,0)
        console.log(totalYears);
        return "The users have an average of " + totalYears / users.length + "years of experience.";
}
console.log(averageYears());


// justin's solution'

// const totalYears = users.reduce((accum, curr)=>{
//
// }, data type we're going to be returning. in this...we're going to be returning a number. 0);

const totalYears = users.reduce((yearsOfExperience, user) =>{
    return accum + user.yearsOfExperience;
}, 0);
// 5. Use .reduce to get the longest email from the list of users.
//stackoverflow.com/questions/54351784/find-longest-string-in-array-of-objects-by-string-property-value
// var longest = arr.reduce(function (a, b) { return a.genre.length > b.genre.length ? a : b; }).genre.length;
// console.log(longest);
const longestEmail = users.reduce((longest, {email}) => {
    return longest.length < email.length ? email: longest}, "")

console.log(longestEmail);

// justin's solution'
// const longestEmail  = users.reduce((accum, curr) =>{
//     if (curr.email.length > accum.length) {
//         return curr.email;
//     } else {
//         return accum;
//         // return (current.email.length > accum.length)? curr.email: accum;
//     }
// }, '');


// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// var result = users.reduce(function(list, {name}) =>
//     `Your instructors are: ${list}  ${name},  .`;

// let listOfUserNames = users.reduce((list, {name}) => {
//    return  (list + {name}.join(","));
// });
// var userString = users.map(function({name}){
//     return users.name;
// }).join(",");
//
// console.log(userString);


// justin's solution
    const userString = users.reduce((accum, name) =>{
        return accum + name + ",";
}, "The instructors are: ").slice(0, -2).concat('.');


//     ES6
// const userString = users.reduce((accum, {name}) => `${accum} ${name}, `, 'The instructors are : ').slice(0, -2) + ".";
    console.log(userString);


    // bonus
// Justin's solution'

// create a long array that has all of the languages in the array. and then convert the array into a special array called a set. and then turn it back into an array
//
// add all languages together into one array using reduce.
//     convert to set
//     convert set back to array

const allLanguages = users.reduce((accum, curr) => {
  return accum.concat(curr.languages)
},[]);

const uniqueLanguages = new Set(allLanguages);
console.log(uniqueLanguages);
const arrayUnique = Array.from(uniqueLanguages);
console.log(arrUnique);
