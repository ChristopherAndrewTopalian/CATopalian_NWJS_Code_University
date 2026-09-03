// calculateSum.js

function calculateSum(numbers)
{
    // check if array is empty or missing
    if (!numbers || numbers.length === 0)
    {
        return null;
    }

    // start with a sum of 0
    let sum = 0;

    // loop through each number in the array
    for (let i = 0; i < numbers.length; i++)
    {
        // add the current number to the sum
        sum = sum + numbers[i];
    }

    // return the final total
    return sum;
}

//----//

console.log(calculateSum([40, 30, 23, 45]));

//----//

/*
138
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

