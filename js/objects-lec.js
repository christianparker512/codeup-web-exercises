"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */
var rubberDuck = {
    color: "yellow",
    role: "emotional support",
    name: "cody"
}
console.log(rubberDuck);
/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */
// var myPhone = {
//     color: "gun metal gray",
//     model: "iPhone X",
//     storage: "64G",
//     ring: function (){
//         console.log("Ring, Ring!");
//     }
//     picture: function() {
//         console.log("Take a picture!")
//     }
//     };
// console.log(myPhone.color);
// console.log(myPhone.model);
// console.log(myPhone.storage);
// myPhone.ring();
// myPhone.picture();

// The object always comes first in the call
/**
 *
// object instance

 var myPhone = new Object();
 console.log (myPhone);
 myPhone.color = "gold"';
 myPhone.model = "iPhone X";
 myPhone.storage = "64g"
 myPhone.ring = function(){

};

 console.log(myPhone);
 myPhone.ring();

 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */
var myMac = {
    color: "Silver",
    memory: "1 TB",
    size: "16 inch"
};
console.log(myMac);
/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */
// myPhone.name = {
//     firstName: "Christian",
//     lastName: "Parker"
// };
//
// console.log(myPhone);
// console.log(myPhone.name);
// console.log(myPhone.name.firstName);
//
// myPhone.apps = ["Slack", "Instagram", "YouTube"];
// console.log(myPhone);
// console.log(myPhone.apps[1]);
//
// myPhone.apps.forEach(function(app){
//     console.log(app);
// });
/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */
// myMac.folders = ["Desktop", "Downloads", "Applications", "iCloud Drive"]
// console.log(myMac[3]);
// /**
//  * TO DO: Assign a 'login' property. This should be an object that stores
//  * 'username','fakePassword' and 'email'
//  */
// myMac.log = {
//     userName: "username",
//     fakePassword: "fakePassword",
//     email: "cmp81670@gmail.com"
// };
/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */
// myPhone.call = function () {
//     console.log("dialing");
// };
// myPhone.call();
// // /**
//  * TO DO: Let's add functionality to our Mac Object. Create a method named
//  * 'powerOn'. When called, this should display a console message that says
//  * "Powering on..."
//  */
// myMac.powerOn = function() {
//     console.log("Powering On")
// }
/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */
// myPhone.currentUser = function () {
//     console.log("Current user: " + this.name.firstName + this.name.lastName);
// };
// myPhone.currentUser();

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */
// myMac.currentUser = function () {
//     console.log("Current user: " + this.login.userName + this.login.email);
// };
// myMac.currentUser();


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */
// it's going to tie in with nested values.
var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants"
        },
        catchPhrase: function(){
            return "I'm Ready";
        },
        abilities: ["Karate", "Bubble Blowing", "Jelly Fishing"]

    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        catchPhrase: function(){
            return "No, this is Patick";
        },
        abilities: ["Rock hiding", "Secret Photo", "Wumbo"]
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Krabs"
        },
        catchPhrase: function(){
            return "Money";
        },
        abilities: ["Fake Money", "Money", "Tiny Violin"]
    },
    {
        name: {
            firstName: "Squidward",
            lastName: "Tentacles"
        },
        catchPhrase: function(){
            return "Nasal Noise";
        },
        abilities: ["Bad Music", "Nag", "Squiding"]
    }
    ];
chooseYourFighter.forEach(function(fighter){
  console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
  console.log("Their abilities: ");

  fighter.abilities.forEach(function(ability){
      console.log(ability);
  });
  console.log("-----------------")
});
