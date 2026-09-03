// gcd.js

function gcd(a, b)
{
    // loop continues until b becomes 0
    while (b !== 0)
    {
        // temporarily store the value of b
        let temp = b;

        // set b to the remainder of a divided by b
        // this is the Euclidean algorithm step
        b = a % b;

        // update a to the previous value of b
        a = temp;
    }

    // when b is 0, a contains the GCD
    return a;
}

//----//

// example usage: GCD of 5 and 10
console.log(gcd(5, 10));

//----//

/*
5
*/

//----//

// computes the greatest common divisor of two numbers

//----//

// computes the greatest common divisor (GCD) of two integers a and b

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

