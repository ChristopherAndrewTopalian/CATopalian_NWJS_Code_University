// swapCase.js

function swapCase(text)
{
    // check if text is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string for invalid input
        return '';
    }

    // initialize result string
    let result = '';

    // loop through each character
    for (let i = 0; i < text.length; i++)
    {
        let char = text.charAt(i);

        // check if char is uppercase
        if (char === char.toUpperCase())
        {
            // convert to lowercase
            result = result + char.toLowerCase();
        }
        else
        {
            // convert to uppercase
            result = result + char.toUpperCase();
        }
    }

    // return the swapped case string
    return result;
}

//----//

// hELLO wORLD!
console.log(swapCase("Hello World!"));

//----//

/*
hELLO wORLD!
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

