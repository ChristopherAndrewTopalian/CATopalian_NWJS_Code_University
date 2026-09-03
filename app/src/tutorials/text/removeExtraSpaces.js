// removeExtraSpaces.js

function removeExtraSpaces(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string if input is invalid
        return '';
    }

    // replace multiple spaces with a single space and trim leading/trailing spaces
    let cleanedText = text.replace(/\s+/g, ' ').trim();

    // return the cleaned text
    return cleanedText;
}

//----//

// hello world
console.log(removeExtraSpaces("   hello     world   "));

// this is spaced out
console.log(removeExtraSpaces("this  is   spaced   out"));

//----//

/*
hello world
this is spaced out
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

