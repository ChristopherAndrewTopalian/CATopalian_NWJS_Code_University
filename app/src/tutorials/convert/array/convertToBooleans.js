// convertToBooleans.js

function convertToBooleans(binaryList) 
{
    let result = binaryList.map(function(num)
    {
        if (num === 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    });

    return result;
}

//----//

// example:
let inputs = [1, 0, 1, 1, 0, 1];

let bools = convertToBooleans(inputs);

console.log(bools);

//----//

/*
[true, false, true, true, false, true]

The Mapper Function (Binary to Boolean)
This function accepts a list of 1s and 0s and returns a list of true/false values.
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

