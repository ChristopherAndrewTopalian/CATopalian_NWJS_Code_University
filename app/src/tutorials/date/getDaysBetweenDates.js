// getDaysBetweenDates.js

function getDaysBetweenDates(whichDateA, whichDateB)
{
    // convert date strings to Date objects
    let dateA = new Date(whichDateA);
    let dateB = new Date(whichDateB);

    // calculate time difference of two dates
    let differenceInTime = dateB.getTime() - dateA.getTime();

    // calculate number of days
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.abs(differenceInDays).toFixed(0);
}

//----//

console.log(getDaysBetweenDates('11/02/2025', '11/23/2023') + ' days');

//----//

/*
710 days
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

