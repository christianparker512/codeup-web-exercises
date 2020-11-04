// build a stop stopwatch
// define an object called a stopwatch
// invervaliId
// count
// Include the following methods..
//
// start() - starts console loggin an increasing count every secondar
// pause () pauses counter
// reset - stops counter and resets to zero

"use strict"
var count = 0;
var intervalId = 0;

var stopwatch ={
    // This isn't set until we start
    // it will be in milliseconds
    // I might want to convert this
    count: 0,
    // These will be methods
    start: function(){
        this.intervalId = setInterval(function(){
            if(isNan(this.count)){
                this.count=0;
            }
            this.count++
            document.getElementById("current-time").innerText = this.count;
            // console.log(this.count);
        }, 1000);
        this.intervalId = tempIdStorage;

    },
    pause: function(){
        clearInterval(this.intervalId);
    },
    reset: function() {
        this.count = 0;
        document.getElementById("current-time".innerText = this.count);
    }

}
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");

startButton.addEventListener("click", stopWatch.start);
pauseButton.addEventListener(click, stopWatch.pause);
resetButton.addEventListener("click, stopWatch.reset");