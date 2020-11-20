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

let threeLanguages = users.filter(function({languages}) {
    return languages.length >= 3;
    // *** ES6 Refractoring
// let threeLanguages = users.filter(({languages}) => languages.length >=3)

});
console.log(threeLanguages)

// 3. Use .map to create an array of strings where each element is a user's email address
let arrayOfEmails = users.map(function({email}) {
    return email;
    // *** ES6 Refractoring
// let arrayOfEmails = users.map(({email}) => email)
});
console.log(arrayOfEmails);

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

// 5. Use .reduce to get the longest email from the list of users.
//stackoverflow.com/questions/54351784/find-longest-string-in-array-of-objects-by-string-property-value
// var longest = arr.reduce(function (a, b) { return a.genre.length > b.genre.length ? a : b; }).genre.length;
// console.log(longest);
const longestEmail = users.reduce((longest, {email}) => {
    return longest.length < email.length ? email: longest}, "")

console.log(longestEmail);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// var result = users.reduce(function(list, {name}) =>
//     `Your instructors are: ${list}  ${name},  .`;

// let listOfUserNames = users.reduce((list, {name}) => {
//    return  (list + {name}.join(","));
// });
var userString = users.map(function({name}){
    return users.name;
}).join(",");

console.log(userString);