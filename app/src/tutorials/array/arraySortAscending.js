// arraySortAscending.js

// define an array of numbers
let numbers = [4, 875, 23, 543, 12];

// sorts an array in ascending order
function arraySortAscending(whichArray)
{
    whichArray.sort(function(a, b)
    {
        // subtracts b from a to determine order: negative means a before b, positive means b before a, zero means no change
        return a - b;
    });
    return whichArray;
}

//----//

// print the sorted array
console.log(arraySortAscending(numbers));

//----//

/*
Array(5) [ 4, 12, 23, 543, 875 ]

sorts an array of numbers in ascending order (smallest to largest)
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

