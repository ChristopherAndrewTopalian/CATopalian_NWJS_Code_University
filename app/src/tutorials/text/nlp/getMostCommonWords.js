// getMostCommonWords.js

function getMostCommonWords(text, topN)
{
    // check if input text is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty array if input invalid
        return [];
    }

    // check if topN is missing or less than 1, default to 1
    if (!topN || topN < 1)
    {
        topN = 1;
    }

    // convert text to lowercase for case insensitive counting
    let lowerText = text.toLowerCase();

    // split text into words by non-word characters
    let words = lowerText.split(/\W+/);

    // object to store word counts
    let wordCounts = {};

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // skip empty strings
        if (word.length === 0)
        {
            continue;
        }

        // increment count if word exists, else set to 1
        if (wordCounts[word])
        {
            wordCounts[word] = wordCounts[word] + 1;
        }
        else
        {
            wordCounts[word] = 1;
        }
    }

    // convert the wordCounts object to an array of [word, count] pairs
    let wordCountPairs = [];

    for (let word in wordCounts)
    {
        wordCountPairs.push([word, wordCounts[word]]);
    }

    // sort the array descending by count
    wordCountPairs.sort(function(a, b)
    {
        return b[1] - a[1];
    });

    // slice the array to get topN words
    let topWords = wordCountPairs.slice(0, topN);

    // return the top words and counts as an array of arrays
    return topWords;
}

//----//

let sentence = "This is a test. This test is only a test.";

console.log(getMostCommonWords(sentence, 3));

//----//

/*
[
  ["test", 3],
  ["this", 2],
  ["is", 2]
]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

