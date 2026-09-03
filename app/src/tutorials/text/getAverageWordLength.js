// getAverageWordLength.js

function getAverageWordLength(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return 0 if input is invalid
        return 0;
    }

    // convert text to lowercase to normalize
    let lowerText = text.toLowerCase();

    // split text into words by non word characters
    let words = lowerText.split(/\W+/);

    // total length of all words combined
    let totalLength = 0;

    // count of valid words
    let wordCount = 0;

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        // current word
        let word = words[i];

        // skip empty strings from split
        if (word.length === 0)
        {
            continue;
        }

        // add word length to total length
        totalLength = totalLength + word.length;

        // increment valid word count
        wordCount = wordCount + 1;
    }

    // if no valid words, return 0
    if (wordCount === 0)
    {
        return 0;
    }

    // calculate average word length as a number
    let average = totalLength / wordCount;

    // return the average word length
    return average;
}

//----//

let sampleText = "Hello world! This is a simple test.";

console.log(getAverageWordLength(sampleText));

//----//

/*
3.857142857142857
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

