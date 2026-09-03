// arrayPushLimit.js

function arrayPushLimit(whichArray, newItem, maxLimit)
{
    // add new item
    whichArray.push(newItem);

    // check limit
    if (whichArray.length > maxLimit) 
    {
        // remove the oldest
        whichArray.shift();
    }

    // return the updated list
    return whichArray;
}

//----//

// example:

let myJournal = ["Msg 1", "Msg 2", "Msg 3"];

myJournal = arrayPushLimit(myJournal, "Msg 4", 3);

console.log(myJournal); 

//----//

/*
// ["Msg 2", "Msg 3", "Msg 4"]

Queue Function (Add and Limit)
This function adds a new item to an array, but ensures the array never gets bigger than a specific limit (e.g., 3 items).
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

