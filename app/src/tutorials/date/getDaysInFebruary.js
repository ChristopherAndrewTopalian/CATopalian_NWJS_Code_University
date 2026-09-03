// getDaysInFebruary.js

function getDaysInFebruary(whichYear)
{
    let febDays;

    if (whichYear % 4 == 0)
    {
        febDays = 29;
    }
    else
    {
        febDays = 28;
    }

    return febDays;
}

//----//

console.log(getDaysInFebruary(2025) + ' days');

//----//

/*
28 days
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

