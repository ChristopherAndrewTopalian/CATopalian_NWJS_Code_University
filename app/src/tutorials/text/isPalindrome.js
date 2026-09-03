// isPalindrome.js

function isPalindrome(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return false if input is invalid
        return false;
    }

    // convert the text to lowercase and remove non alphanumeric characters
    let cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');

    // reverse the cleaned string
    let reversed = '';

    for (let i = cleaned.length - 1; i >= 0; i--)
    {
        reversed = reversed + cleaned.charAt(i);
    }

    // check if the cleaned string is the same as the reversed string
    return cleaned === reversed;
}

//----//

// true
console.log(isPalindrome("Racecar"));

// false
console.log(isPalindrome("Hello"));

// true
console.log(isPalindrome("A man, a plan, a canal, Panama"));

//----//

/*
true
false
true
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

