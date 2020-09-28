(function() {
    "use strict";
    <script>
        "use strict";
        /* **************************************
        Function Examples
        ****************************************/
        function add(x = 1, y = 2){
        //console.log(x + y);
        return x + y;
    }
        function subtract(x, y){
        //console.log(x + y);
        return x - y;
    }
        // What we pass into these function calls are 'arguments'
        add(1,2);
        subtract(5,4);
        //TODO: Answer this question. What is the difference between a function return vs console log?
        var multiply = function (x,y) {
        return x * y;
    }
        // If the function has a return, the call itself can be assigned to a variable to store the value.
        var product = multiply(6,7);
        //TODO: create a 'divide' function that divides two parameters
        /* **************************************
        Arguments & Parameters
        ****************************************/
        //TODO: Answer these questions. How many parameters are in our 'add' function? How many arguments?
        //TODO: Modify the add and subtract functions to use default parameters.
        /* **************************************
        Global & Local Variables
        ****************************************/
        var name = "Sophie";
        var day = "Monday";
        function greeting(){
        var username = "Vivian";
        return "Hi " + username + "!";
    }
        console.log(name);
        console.log(username);
        //TODO: Describe what is happening with the above console logs.
        //TODO: What happens if the variables are the same name? Test it out.
        function checkName(){
        var day = "Tuesday";
        console.log(day);
    }
        //TODO: Which day will log to the console? Call the function to test it.
        /* **************************************
        IIFE
        ****************************************/
        //TODO: Refactor all JS to be linked externally, and wrap all code in an IIFE.
    </script>
})