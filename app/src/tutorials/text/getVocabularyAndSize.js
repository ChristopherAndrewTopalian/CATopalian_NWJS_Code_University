// getVocabularyAndSize.js

function getVocabularyAndSize(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return count 0 and empty array if input is invalid
        return { count: 0, words: [] };
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

    // get array of unique words
    let uniqueWordList = Object.keys(uniqueWords);

    // return object with count and list of words
    return { count: uniqueWordList.length, words: uniqueWordList };
}

//----//

let sampleText = "Hello hello world! This is a test. Test, test.";

let result = getVocabularyAndSize(sampleText);

console.log("vocabulary size: " + result.count);

console.log("words: " + result.words.join(", "));

//----//

/*
vocabulary size: 6
words: hello, world, this, is, a, test
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

