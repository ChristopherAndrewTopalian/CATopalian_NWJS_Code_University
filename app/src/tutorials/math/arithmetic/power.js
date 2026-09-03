// power.js

// computes a raised to the power of b (a^b)
function power(a, b)
{
    // if the exponent is 0, any number to the 0th power is 1
    if (b === 0)
    {
        return 1;
    }

    // handle negative exponents
    let isNegative = false;
    if (b < 0)
    {
        isNegative = true;

        // make exponent positive for calculation
        b = -b;
    }

    // initialize result
    let result = 1;

    // multiply a by itself b times
    for (let i = 0; i < b; i++)
    {
        result *= a;
    }

    // if original exponent was negative, return reciprocal
    if (isNegative)
    {
        return 1 / result;
    }

    return result;
}

//----//

// example usage: 2 to the power of 3
console.log(power(2, 3));

// example usage: 2 to the power of -3
console.log(power(2, -3));

//----//

/*
8
0.125
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

