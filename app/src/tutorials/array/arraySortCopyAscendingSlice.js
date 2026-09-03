// arraySortCopyAscendingSlice.js

// sorts an array of numbers in ascending order (smallest to largest)

// define an array of numbers
let numbers = [4, 875, 23, 543, 12];

// function to sort an array in ascending order
function arraySortCopyAscendingSlice(whichArray)
{
    // .slice() creates a shallow copy so the original array is not modified
    // .sort() sorts the array
    // function(a, b) { return a - b; } ensures numerical ascending sort
    let sortedArray = whichArray.slice().sort(function(a, b)
    {
        // subtracts b from a to determine order: negative means a before b, positive means b before a, zero means no change
        return a - b;
    });

    // return the sorted array
    return sortedArray;
}

//----//

// call the function and print the sorted array
console.log(arraySortCopyAscendingSlice(numbers));

//----//

/*
[4, 12, 23, 543, 875]
*/

//----//

// print the original array to show it is unchanged
console.log(numbers);

//----//

/*
[4, 875, 23, 543, 12]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

