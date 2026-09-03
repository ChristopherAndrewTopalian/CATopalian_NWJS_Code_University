// arraySortCopyAscending.js

function arraySortCopyAscending(whichArray) 
{
    // create a copy so we don't mutate original data
    let copy = [...whichArray]; 

    let result = copy.sort(function(a, b)
    {
        return a - b;
    });

    return result;
}

//----//

// example:

let levels = [100, 5, 20, 1];

let sorted = arraySortCopyAscending(levels); 

console.log(sorted); 

//----//

/*
Array(4) [ 1, 5, 20, 100 ]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

