// tokenizeSentences.js

function tokenizeSentences(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty array for invalid input
        return [];
    }

    // trim the text and split it into sentences using punctuation
    let rawSentences = text.trim().split(/[.!?]+/);

    // create a new array to store cleaned sentences
    let sentences = [];

    // loop through each raw sentence
    for (let i = 0; i < rawSentences.length; i++)
    {
        let sentence = rawSentences[i].trim();

        // only add non-empty sentences
        if (sentence.length > 0)
        {
            sentences.push(sentence);
        }
    }

    // return the array of sentences
    return sentences;
}

//----//

let example = "Hello world! How are you doing today? This is a test. Let's go!";

// test it out
console.log(tokenizeSentences(example));

//----//

/*
[
    "Hello world",
    "How are you doing today",
    "This is a test",
    "Let's go"
]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

