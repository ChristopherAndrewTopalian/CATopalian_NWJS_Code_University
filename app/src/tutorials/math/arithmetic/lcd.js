// lcd.js

// computes the lowest common denominator (LCD) of two integers a and b
function lcd(a, b)
{
    // ensure a and b are positive
    a = Math.abs(a);
    b = Math.abs(b);

    // start with the larger of a and b as candidate for denominator
    let candidate = a > b ? a : b;

    // loop until candidate is divisible by both a and b
    while (candidate % a !== 0 || candidate % b !== 0)
    {
        // increase candidate by 1 and check again
        candidate += 1;
    }

    // candidate divisible by both a and b is the LCD
    return candidate;
}

//----//

// example usage: LCD of 6 and 8
console.log(lcd(8, 10));

//----//

/*
40
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

