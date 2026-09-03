// arrayMin.js

// array of numbers we want to find the minimum of
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

// function to find the smallest number in an array
function arrayMin(whichArray)
{
    // assume the first element is the smallest
    let min = whichArray[0];

    // loop through the array to compare each element
    for (let i = 1; i < whichArray.length; i++)
    {
        if (whichArray[i] < min)
        {
            // update min if current element is smaller
            min = whichArray[i];
        }
    }

    // return the smallest number
    return min;
}

//----//

// call the function and pass our array
console.log(arrayMin(ourNumbers));

//----//

/*
4
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

