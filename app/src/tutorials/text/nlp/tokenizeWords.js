// tokenizeWords.js

function tokenizeWords(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty array for invalid input
        return [];
    }

    // convert to lowercase and remove punctuation
    let cleaned = text.toLowerCase().replace(/[^\w\s]/g, '');

    // split the cleaned text into words using whitespace
    let words = cleaned.split(/\s+/);

    // filter out any empty strings
    let filteredWords = [];

    for (let i = 0; i < words.length; i++)
    {
        if (words[i].length > 0)
        {
            filteredWords.push(words[i]);
        }
    }

    // return the list of words
    return filteredWords;
}

//----//

let example = "Hello! This is a sample sentence with punctuation, and mixed CASE.";

// test it out
console.log(tokenizeWords(example));

//----//

/*
[
    "hello",
    "this",
    "is",
    "a",
    "sample",
    "sentence",
    "with",
    "punctuation",
    "and",
    "mixed",
    "case"
]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

