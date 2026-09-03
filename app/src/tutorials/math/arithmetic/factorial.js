// factorial.js

function factorial(n)
{
    if (n < 0)
    {
        // factorial is not defined for negative numbers
        return undefined;
    }

    // initialize result as 1 (0! and 1! both equal 1)
    let result = 1;

    // multiply result by every integer from 2 up to n
    for (let i = 2; i <= n; i++)
    {
        // multiply current result by i
        result *= i;
    }

    // return the final factorial value
    return result;
}

//----//

// example usage: factorial of 8
console.log(factorial(8));

//----//

/*
40320
*/

//----//

// calculates the factorial of a number

//----//

// calculates the factorial of a non-negative integer n

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

