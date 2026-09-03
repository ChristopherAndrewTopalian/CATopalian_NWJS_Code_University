// arraySortCopyDescendingSlice.js

// sorts an array of numbers in descending order (largest to smallest)

// define an array of numbers
let numbers = [4, 875, 23, 543, 12];

// function to sort an array in descending order
function arraySortCopyDescendingSlice(whichArray)
{
    // .slice() creates a shallow copy so the original array is not modified
    // .sort() sorts the array
    // function(a, b) { return b - a; } ensures numerical descending sort
    let sortedArray = whichArray.slice().sort(function(a, b)
    {
        // subtracts a from b to determine order: negative means b before a, positive means a before b, zero means no change
        return b - a;
    });

    // return the sorted array
    return sortedArray;
}

//----//

// call the function and print the sorted array
console.log(arraySortDescending(numbers));

//----//

/*
[875, 543, 23, 12, 4]
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

