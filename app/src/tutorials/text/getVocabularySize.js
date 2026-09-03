// getVocabularySize.js

function getVocabularySize(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return 0 if input is invalid
        return 0;
    }

    // convert text to lowercase to normalize
    let lowerText = text.toLowerCase();

    // split text into words by non-word characters
    let words = lowerText.split(/\W+/);

    // create an object to store unique words
    let uniqueWords = {};

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

        // add word to uniqueWords object as a key
        uniqueWords[word] = true;
    }

    // return the count of unique words (vocabulary size)
    return Object.keys(uniqueWords).length;
}

//----//

let sampleText = "Hello hello world! This is a test. Test, test.";

console.log(getVocabularySize(sampleText));

/*
6 
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

