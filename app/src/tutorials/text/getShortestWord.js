// getShortestWord.js

function getShortestWord(text)
{
    // check if text is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string for invalid input
        return '';
    }

    // remove punctuation and split the text into words
    let words = text.replace(/[^\w\s]/g, '').split(' ');

    // filter out any empty strings
    let validWords = [];

    for (let i = 0; i < words.length; i++)
    {
        if (words[i].length > 0)
        {
            validWords.push(words[i]);
        }
    }

    // if no valid words, return empty string
    if (validWords.length === 0)
    {
        return '';
    }

    // set initial shortest word
    let shortest = validWords[0];

    // loop through the rest
    for (let i = 1; i < validWords.length; i++)
    {
        if (validWords[i].length < shortest.length)
        {
            shortest = validWords[i];
        }
    }

    // return the shortest word found
    return shortest;
}

//----//

console.log(getShortestWord("The quick brown fox jumped over a lazy dog."));

//----//

/*
a
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

