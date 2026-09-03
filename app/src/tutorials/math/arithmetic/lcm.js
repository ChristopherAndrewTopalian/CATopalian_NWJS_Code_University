// lcm.js

// computes the least common multiple (LCM) of two integers a and b
function lcm(a, b)
{
    // ensure a and b are positive
    a = Math.abs(a);
    b = Math.abs(b);

    // start with the first multiple of a
    let multiple = a;

    // loop until multiple is divisible by b
    while (multiple % b !== 0)
    {
        // add a to multiple to check the next candidate
        multiple += a;
    }

    // when divisible by b, we have found the LCM
    return multiple;
}

//----//

// example usage: LCM of 4 and 8
console.log(lcm(4, 8));

//----//

/*
8
*/

//----//

// computes the least common multiple of two numbers

//----//


// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

