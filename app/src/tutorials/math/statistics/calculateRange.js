// calculateRange.js

function findMax(numbers)
{
    // check if array is empty or missing
    if (!numbers || numbers.length === 0)
    {
        return null;
    }

    // assume first value is the maximum
    let max = numbers[0];

    // loop through the rest of the numbers
    for (let i = 1; i < numbers.length; i++)
    {
        // if current number is greater than max, update max
        if (numbers[i] > max)
        {
            max = numbers[i];
        }
    }

    return max;
}

function findMin(numbers)
{
    // check if array is empty or missing
    if (!numbers || numbers.length === 0)
    {
        return null;
    }

    // assume first value is the minimum
    let min = numbers[0];

    // loop through the rest of the numbers
    for (let i = 1; i < numbers.length; i++)
    {
        // if current number is less than min, update min
        if (numbers[i] < min)
        {
            min = numbers[i];
        }
    }

    return min;
}

function calculateRange(numbers)
{
    // get the maximum number
    let max = findMax(numbers);

    // get the minimum number
    let min = findMin(numbers);

    // if either is null, the input is invalid
    if (max === null || min === null)
    {
        return null;
    }

    // return the difference between max and min
    return max - min;
}

//----//

console.log(calculateRange([40, 30, 23, 45]));

//----//

/*
22
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

