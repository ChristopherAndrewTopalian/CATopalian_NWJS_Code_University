// calculateMedian.js

function calculateMedian(numbers)
{
    // check if the input is missing or if the array is empty
    if (!numbers || numbers.length === 0)
    {
        // no median to calculate, return null
        return null;
    }

    // make a copy of the array and sort it in ascending order
    let sorted = numbers.slice().sort(function(a, b)
    {
        return a - b;
    });

    // store the middle index of the array
    let middleIndex = Math.floor(sorted.length / 2);

    // check if the number of items is odd
    if (sorted.length % 2 !== 0)
    {
        // return the middle number for odd length arrays
        return sorted[middleIndex];
    }

    // if even, calculate the average of the two middle numbers
    let median = (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;

    // return the median
    return median;
}

//----//

// odd count
console.log(calculateMedian([10, 20, 30, 40, 50]));

// even count
console.log(calculateMedian([10, 20, 30, 40]));

//----//

/*
30
25
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

