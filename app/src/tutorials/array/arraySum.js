// arraySum.js

// array of numbers we want to sum
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

// function to calculate the sum of all elements in an array
function arraySum(whichArray)
{
    // initialize total to 0
    let total = 0;

    // loop through each element in the array
    for (let i = 0; i < whichArray.length; i++)
    {
        // add current element to total
        total += whichArray[i];
    }

    // return the sum in case we need it elsewhere
    return total;
}

//----//

// call the function and pass our array
console.log(arraySum(ourNumbers));

//----//

/*
1457
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

