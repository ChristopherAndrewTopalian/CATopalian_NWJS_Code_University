// arraySortCopyDescendingSpread.js

function arraySortCopyDescendingSpread(whichArray) 
{
    // create a copy so we don't mutate original data
    let copy = [...whichArray]; 

    let result = copy.sort(function(a, b)
    {
        return b - a;
    });

    return result;
}

//----//

// example:

let levels = [1, 100, 75, 20, 5];

let sorted = arraySortCopyDescendingSpread(levels); 

console.log(sorted); 

//----//

/*
Array(5) [ 100, 75, 20, 5, 1 ]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

