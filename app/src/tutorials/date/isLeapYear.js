// isLeapYear.js

function isLeapYear(year)
{
    // check if the input is a number and not missing
    if (typeof year !== 'number' || isNaN(year))
    {
        // if invalid input, then return null
        return null;
    }

    // leap year logic:
    // divisible by 4, not divisible by 100 unless also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    {
        return true;
    }

    return false;
}

//----//

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false

//----//

/*
true
false
true
false
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

