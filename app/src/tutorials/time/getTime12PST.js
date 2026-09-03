// getTime12PST.js

function getTime12PST()
{
    let dateTime = new Date();

    // get UTC time and subtract 8 hours for PST
    let pstDateTime = new Date(dateTime.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));

    let hours = pstDateTime.getHours();
    let minutes = pstDateTime.getMinutes();
    let seconds = pstDateTime.getSeconds();
    let amOrPm;

    // am or pm
    if(hours < 12)
    {
        amOrPm = "AM";
    }
    else
    {
        amOrPm = "PM";
    }

    // convert from military time
    if (hours > 12)
    {
        hours -= 12;
    }
    else if (hours === 0)
    {
        hours = 12;
    }

    // add a zero
    if (hours < 10)
    {
        hours = "0" + hours;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    let time = hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;

    return time;
}

console.log(getTime12PST());

//----//

/*
04:54:27 AM
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

