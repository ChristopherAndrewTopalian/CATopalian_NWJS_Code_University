// countWords.js

function countWords(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== "string")
    {
        return 0;
    }

    // trim leading and trailing spaces
    // split by one or more whitespace characters using regex
    let words = text.trim().split(/\s+/);

    // if the result is an empty string, return 0
    if (words[0] === "")
    {
        return 0;
    }

    // return the number of words
    return words.length;
}

//----//

// 2
console.log(countWords("hello world"));

// 4
console.log(countWords("the quick brown fox"));

// 4
console.log(countWords("   lots   of   spaces   here  "));

// 0
console.log(countWords(""));

// 1
console.log(countWords("one"));

//----//

/*
2
4
4
0
1
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

