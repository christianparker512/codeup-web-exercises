// Coding Challenge #26: create a function that will receive two arrays and will return an array with elements that are in the first array but not the second
function uniqueToFirstArray(arrayOne, arrayTwo){
    //compare the arrays
    //some kind of loop possibly
    //Going to need to loop 1 or maybe both arrays
    //keep in mind that it is elements in the first but not the second

    var bucket = [];
    arrayOne.forEach(function (value) {
        //which do I start with?
        if(!arrayTwo.includes(value)){
            bucket.push(value);
        }
    })
    return bucket;
}
var testArr = [1, false, "dog", 3.14, "hello"];
var testArrTwo =[1, true, "cat", 3.14, "hello"];