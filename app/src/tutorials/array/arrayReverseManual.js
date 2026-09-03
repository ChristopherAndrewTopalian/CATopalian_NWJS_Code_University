// arrayReverseManual.js

// teaches reversing an array manually using a traditional for loop

// define an array of numbers
let ourNumbers = [
    4, 875, 23, 543, 12
];

// function to reverse an array manually
function arrayReverseManual(whichArray)
{
    // create a new empty array to store the reversed elements
    let reversedArray = [];

    // loop from the last element to the first element of the input array
    for (let i = whichArray.length - 1; i >= 0; i--)
    {
        // push the current element into the reversed array
        reversedArray.push(whichArray[i]);
    }

    // return the reversed array
    return reversedArray;
}

//----//

// call the function and print the reversed array
console.log(arrayReverseManual(ourNumbers));

//----//

/*
[12, 543, 23, 875, 4]
*/

// original array remains unchanged
console.log(ourNumbers);

/*
[4, 875, 23, 543, 12]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

