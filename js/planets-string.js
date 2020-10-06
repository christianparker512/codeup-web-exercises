(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];

    var planets = ['Mercury','Venus','Earth', 'Mars', 'Jupiter', 'Saturn','Uranus','Neptune'];
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log('Adding "The Sun" from the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift(The Sun);
    console.log(planets);

    console.log('Removing "Pluto" from the beginning of the planets array.');
    planets.unshift();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array');
    planets.IndexofEarth =

    console.log("Reversing the array)" +
    planets.reverse();
    console.log(planets);

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsBrokenString = planetsArray.join("<br>")
    console.log(planetsBrokenString);

    var planetsList = "<ul>\n<li>";
    planetsList += planetsArray.join("</li>\n<li>");
    planetsList += "</li>\n</ul>";

    console.log(planetsList);




        3




    Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
    Using multiple functions will be helpful.
        input = 5552324343, output = 555-232-4343
    input = 5553434, output = 555-3434
    input = 18005552323, output = 1-800-555-2323
    Extra Challenge: account for invalid characters
    Extra Challenge: if the input is already formatted, output the unformatted version
    Extra Challenge: allow the parser to accept letters and convert them to the correct numbers

    var phoneNumbers= '210-555-2020 \n230-555-5555\n5126891720';

    function cleanPhoneNumbers(phoneNums) {
        var output = [];
        // split input on newline character into an array of numbers
        var phoneNumArr = phoneNums.split('\n');
        phoneNums.forEach(function(phoneNum){
            var phoneNumArr = phoneNum.split('-');
            // combine into a single string without dashes
            var phoneNumWithOutDashes = phoneNumArr.join();
            output.push(phoneNumWithOutDashes);
            console.log(phoneNumArr);
        });
        return output;
    }

})();
