// isInArray.js

// array of numbers we want to search through
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

function isInArray(whichArray)
{
    // number we are looking for
    let numberToFind = 875;

    // check if the array includes the number
    if (whichArray.includes(numberToFind))
    {
        // returns true if number is found
        return true;
    }
    else
    {
        // returns false if number is not found
        return false;
    }
}

//----//

// call the function and pass our array
console.log(isInArray(ourNumbers));

//----//

/*
true
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

