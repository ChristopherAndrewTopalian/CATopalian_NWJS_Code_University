// getDateLong.js

function getDateLong()
{
    let dateTime = new Date();

    let year = dateTime.getFullYear();

    let month = dateTime.getMonth() + 1;

    //-//

    let monthName = "";

    if (month === 1)
    {
        monthName = "January";
    }
    else if (month === 2)
    {
        monthName = "February";
    }
    else if (month === 3)
    {
        monthName = "March";
    }
    else if (month === 4)
    {
        monthName = "April";
    }
    else if (month === 5)
    {
        monthName = "May";
    }
    else if (month === 6)
    {
        monthName = "June";
    }
    else if (month === 7)
    {
        monthName = "July";
    }
    else if (month === 8)
    {
        monthName = "August";
    }
    else if (month === 9)
    {
        monthName = "September";
    }
    else if (month === 10)
    {
        monthName = "October";
    }
    else if (month === 11)
    {
        monthName = "November";
    }
    else if (month === 12)
    {
        monthName = "December";
    }

    //-//

    let dayOfMonth = dateTime.getDate();

    // sun is 0, mon is 1
    let dayOfWeek = dateTime.getDay();

    //-//

    let dayOfWeekName = "";

    if (dayOfWeek === 0)
    {
        dayOfWeekName = "Sunday";
    }
    else if (dayOfWeek === 1)
    {
        dayOfWeekName = "Monday";
    }
    else if (dayOfWeek === 2)
    {
        dayOfWeekName = "Tuesday";
    }
    else if (dayOfWeek === 3)
    {
        dayOfWeekName = "Wednesday";
    }
    else if (dayOfWeek === 4)
    {
        dayOfWeekName = "Thursday";
    }
    else if (dayOfWeek === 5)
    {
        dayOfWeekName = "Friday";
    }
    else if (dayOfWeek === 6)
    {
        dayOfWeekName = "Saturday";
    }

    //-//

    let formattedDate = monthName + " " + dayOfMonth + ", " + year + ", " + dayOfWeekName;

    return formattedDate;
}

//----//

console.log(getDateLong());

//----//

/*
April 17, 2025, Thursday
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

