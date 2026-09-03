// getActiveSignals.js

function getActiveSignals(signalList) 
{
    let result = signalList.filter(function(signal)
    {
        return signal === 1;
    });

    return result;
}

//----//

// example

let rawData = [1, 0, 1, 0, 0, 1, 0, 1];

let cleanData = getActiveSignals(rawData);

console.log(cleanData);

//----//

/*
[1, 1, 1, 1]

Filter for Removing Unwanted Data:
We use .filter() to create a new array containing only items that pass a test.

Use cases: 
* Removing 0 signals
* finding passing grades
* filtering out offline users.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

