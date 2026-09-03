// arrayMax.js

// array of numbers we want to find the maximum of
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

// function to find the largest number in an array
function arrayMax(whichArray)
{
    // assume the first element is the largest
    let max = whichArray[0];

    // loop through the array to compare each element
    for (let i = 1; i < whichArray.length; i++)
    {
        if (whichArray[i] > max)
        {
            // update max if current element is larger
            max = whichArray[i];
        }
    }

    // return the largest number
    return max;
}

//----//

// call the function and pass our array
console.log(arrayMax(ourNumbers));

//----//

/*
875
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

