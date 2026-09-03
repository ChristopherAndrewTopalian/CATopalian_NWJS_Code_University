// getMostCommonWord.js

function getMostCommonWord(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return null if input is invalid
        return null;
    }

    // convert the text to lowercase to make counting case-insensitive
    let lowerText = text.toLowerCase();

    // split the text into words using non-word characters as separators
    let words = lowerText.split(/\W+/);

    // create an object to hold word counts
    let wordCounts = {};

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // skip empty strings from split
        if (word.length === 0)
        {
            continue;
        }

        // if word is already in the object, increment its count
        if (wordCounts[word])
        {
            wordCounts[word] = wordCounts[word] + 1;
        }
        else
        {
            // if word is not in the object, add it with count 1
            wordCounts[word] = 1;
        }
    }

    // create variables to track the most common word and its count
    let mostCommon = null;
    let highestCount = 0;

    // loop through the keys in the wordCounts object
    for (let word in wordCounts)
    {
        // if this word has a higher count than the current highest
        if (wordCounts[word] > highestCount)
        {
            // update the most common word and its count
            mostCommon = word;
            highestCount = wordCounts[word];
        }
    }

    // return the most common word found
    return mostCommon;
}

//----//

let sentence = "This is just a test. This test is only a test.";

console.log(getMostCommonWord(sentence));

//----//

/*
test
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

