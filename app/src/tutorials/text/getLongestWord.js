// getLongestWord.js

function getLongestWord(text)
{
    // check if text is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string for invalid input
        return '';
    }

    // remove punctuation and split text into words
    let words = text.replace(/[^\w\s]/g, '').split(' ');

    // initialize a variable to keep track of the longest word
    let longest = '';

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let currentWord = words[i];

        // check if the current word is longer than the current longest
        if (currentWord.length > longest.length)
        {
            longest = currentWord;
        }
    }

    // return the longest word
    return longest;
}

//----//

// jumped
console.log(getLongestWord("The quick brown fox jumped over the lazy dog."));

//----//

/*
jumped
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

