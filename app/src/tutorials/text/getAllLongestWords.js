// getAllLongestWords.js

function getAllLongestWords(text)
{
    // check if text is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return an empty array for invalid input
        return [];
    }

    // remove punctuation and split text into words
    let words = text.replace(/[^\w\s]/g, '').split(' ');

    // initialize an array to hold the longest words
    let longestWords = [];

    // keep track of the length of the longest word found
    let maxLength = 0;

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let currentWord = words[i];

        // skip empty words caused by multiple spaces
        if (currentWord.length === 0)
        {
            continue;
        }

        if (currentWord.length > maxLength)
        {
            // found a new longer word, reset the list
            longestWords = [currentWord];
            maxLength = currentWord.length;
        }
        else if (currentWord.length === maxLength)
        {
            // found another word with same max length, add it
            longestWords.push(currentWord);
        }
    }

    // return the array of longest words
    return longestWords;
}

//----//

console.log(getAllLongestWords("The quick brown fox jumped over the sleepy lazy dog."));

//----//

/*
[ 'jumped', 'sleepy' ]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

