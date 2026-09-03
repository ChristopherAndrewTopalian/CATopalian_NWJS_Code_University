// findMin.js

function findMin(numbers)
{
    // check if the array is missing or empty
    if (!numbers || numbers.length === 0)
    {
        // return null if there is no data to process
        return null;
    }

    // start by assuming the first number is the smallest
    let min = numbers[0];

    // go through each number in the array starting from index 1
    for (let i = 1; i < numbers.length; i++)
    {
        // if the current number is less than our current minimum
        if (numbers[i] < min)
        {
            // update the minimum value to this smaller number
            min = numbers[i];
        }
    }

    // after checking all numbers, return the smallest one
    return min;
}

//----//

console.log(findMin([40, 30, 23, 45]));

//----//

/*
23
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

