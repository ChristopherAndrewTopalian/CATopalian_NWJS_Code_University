// arrayReverse.js

// uses the built-in reverse() function for efficiency and simplicity

// define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// function to reverse an array using the built-in methods
function arrayReverse(whichArray)
{
    // .slice() creates a shallow copy of the array
    // .reverse() then reverses the copy, leaving the original array unchanged
    let reversedArray = whichArray.slice().reverse();

    // return the reversed array
    return reversedArray;
}

//----//

// call the function and print the reversed array
console.log(arrayReverse(numbers));

//----//

/*
[5, 4, 3, 2, 1]
*/

// print the original array to show it is unchanged
console.log(numbers);

/*
[1, 2, 3, 4, 5]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

