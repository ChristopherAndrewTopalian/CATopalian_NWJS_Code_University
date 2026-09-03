// countConsonants.js

function countConsonants(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== "string")
    {
        return 0;
    }

    // convert the text to lowercase
    let lowerText = text.toLowerCase();

    // define all the consonant letters
    let consonants = "bcdfghjklmnpqrstvwxyz";

    // start with 0 consonants
    let count = 0;

    // loop through each character
    for (let i = 0; i < lowerText.length; i++)
    {
        // check if the character is a consonant
        if (consonants.indexOf(lowerText[i]) !== -1)
        {
            count = count + 1;
        }
    }

    // return the number of consonants
    return count;
}

//----//


console.log(countConsonants("hello world"));

// 0
console.log(countConsonants("AEIOU"));

// 5
console.log(countConsonants("BCDFG"));

// 0
console.log(countConsonants("123!@#"));

// 9
console.log(countConsonants("The quick fox"));

//----//

/*
7
0
5
0
9
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

