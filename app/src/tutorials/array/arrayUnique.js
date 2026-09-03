// arrayUnique.js

// define an array with some duplicate numbers
let numbers = [4, 23, 12, 4, 875, 12, 543];

// function to return a new array with duplicates removed
function arrayUnique(whichArray)
{
    // create a new empty array to store unique values
    let uniqueArray = [];

    // loop through each element in the input array
    for (let i = 0; i < whichArray.length; i++)
    {
        // check if the current element is already in the uniqueArray
        if (uniqueArray.indexOf(whichArray[i]) === -1)
        {
            // if not found, push it into uniqueArray
            uniqueArray.push(whichArray[i]);
        }
        // if found, do nothing (skip duplicates)
    }

    // return the array containing only unique elements
    return uniqueArray;
}

//----//

// call the function and print the result
console.log(arrayUnique(numbers));

//----//

/*
[4, 23, 12, 875, 543]
*/

//----//

// print the original array to show it is unchanged
console.log(numbers);

//----//

/*
[4, 23, 12, 4, 875, 12, 543]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting


