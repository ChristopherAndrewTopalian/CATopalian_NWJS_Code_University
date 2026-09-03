// countVowels.js

function countVowels(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== "string")
    {
        return 0;
    }

    // define the set of vowels
    let vowels = "aeiouAEIOU";

    // keep track of the count
    let count = 0;

    // loop through each character in the string
    for (let i = 0; i < text.length; i++)
    {
        // check if the current character is a vowel
        if (vowels.indexOf(text[i]) !== -1)
        {
            count = count + 1;
        }
    }

    // return the number of vowels found
    return count;
}

//----//

// 3
console.log(countVowels("hello world"));

// 5
console.log(countVowels("JAVASCRIPT IS FUN"));

// 7
console.log(countVowels("This is a test message"));

// 0
console.log(countVowels("12345"));

//----//

/*
3
5
7
0
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

