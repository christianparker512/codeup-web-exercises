"use strict"
function braces(string){
    var braceList = "[]{}()"
    var braceCount = 0;
    for (var i =0; i < string.length; i++)
        if (braceList.indexOf(string[i]) !== -1) {
            braceCount +=1;
        }

    return braceCount;
}

console.log(braces("helloa;lsdjf90w-qew9-g-34tjawer--][][lk][[]909()))])"));