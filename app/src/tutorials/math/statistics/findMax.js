// findMax.js

function findMax(numbers)
{
    // check if the input is missing or if the array is empty
    if (!numbers || numbers.length === 0)
    {
        // nothing to return
        // list is empty or missing
        return null;
    }

    // assume the first number in the list is the largest to start
    let max = numbers[0];

    // loop through the rest of the numbers starting from index 1
    for (let i = 1; i < numbers.length; i++)
    {
        // if the current number is greater than the current max
        if (numbers[i] > max)
        {
            // update max to the new higher number
            max = numbers[i];
        }
    }

    // return the largest number found
    return max;
}

//----//

console.log(findMax([40, 30, 23, 45]));

//----//

/*
45
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

