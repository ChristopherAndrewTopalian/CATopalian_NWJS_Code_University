// getDateLongArray.js

function getDateLongArray()
{
    let dateTime = new Date();

    let year = dateTime.getFullYear();
    let monthIndex = dateTime.getMonth();
    let dayOfMonth = dateTime.getDate();
    // 0 = Sunday
    let dayOfWeekIndex = dateTime.getDay();

    //-//

    let monthNames =
    [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let dayOfWeekNames =
    [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    let monthName = monthNames[monthIndex];
    let dayOfWeekName = dayOfWeekNames[dayOfWeekIndex];

    //-//

    let formattedDate = monthName + " " + dayOfMonth + ", " + year + ", " + dayOfWeekName;

    return formattedDate;
}

//----//

console.log(getDateLongArray());

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

