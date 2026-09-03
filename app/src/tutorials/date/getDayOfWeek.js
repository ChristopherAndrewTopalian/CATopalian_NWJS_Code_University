// getDayOfWeek.js

function getDayOfWeek(dateInput)
{
    // if input is missing or invalid, return null
    if (!dateInput)
    {
        return null;
    }

    // create a Date object
    let date = new Date(dateInput);

    // check if the date is valid
    if (isNaN(date.getTime()))
    {
        return null;
    }

    // array of weekday names
    let dayNames =
    [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    // get the day index and return the name
    let dayIndex = date.getDay();

    return dayNames[dayIndex];
}

//----//

// Thursday
console.log(getDayOfWeek('2024-07-04'));

// Wednesday
console.log(getDayOfWeek('2025-01-01'));

// today
console.log(getDayOfWeek(new Date()));

//----//

/*
Thursday
Wednesday
(Sunday... depending on today)
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

