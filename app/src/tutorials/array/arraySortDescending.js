// arraySortDescending.js

// sorts an array of numbers in descending order (largest to smallest)

// define an array of numbers
let numbers = [4, 875, 23, 543, 12];

// sorts an array in descending order
function arraySortDescending(whichArray)
{
    // .slice() creates a shallow copy so the original array is not modified
    // .sort() sorts the array
    let sortedArray = whichArray.slice().sort(function(a, b)
    {
        return b - a;
    });

    // return the sorted array
    return sortedArray;
}

//----//

// print the sorted array
console.log(arraySortDescending(numbers));

//----//

/*
Array(5) [ 875, 543, 23, 12, 4 ]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

