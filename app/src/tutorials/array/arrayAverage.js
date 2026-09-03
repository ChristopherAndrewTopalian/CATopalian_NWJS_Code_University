// arrayAverage.js

// array of numbers we want to find the average of
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

// function to calculate the average of array elements
function arrayAverage(whichArray)
{
    // initialize total to 0
    let total = 0;

    // loop through each element in the array
    for (let i = 0; i < whichArray.length; i++)
    {
        // add current element to total
        total += whichArray[i];
    }

    // calculate average by dividing total by number of elements
    let average = total / whichArray.length;

    // return the average in case we need it elsewhere
    return average;
}

//----//

// call the function and pass our array
console.log(arrayAverage(ourNumbers));

//----//

/*
291.4
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

