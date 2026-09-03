// getMonthName.js

function getMonthName(dateInput)
{
    // if no input provided, return null
    if (!dateInput)
    {
        return null;
    }

    // create a Date object
    let date = new Date(dateInput);

    // check for invalid date
    if (isNaN(date.getTime()))
    {
        return null;
    }

    // array of month names
    let monthNames =
    [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    // get the month index (0–11)
    let monthIndex = date.getMonth();

    // return the name
    return monthNames[monthIndex];
}

//----//

// December
console.log(getMonthName('2024-12-25'));

// July
console.log(getMonthName('2025-07-04'));

// current month
console.log(getMonthName(new Date()));

//----//

/*
December
July
May... depending on today
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

