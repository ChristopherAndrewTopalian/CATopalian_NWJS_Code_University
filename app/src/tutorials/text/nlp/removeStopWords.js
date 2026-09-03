// removeStopWords.js

function removeStopWords(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string for invalid input
        return '';
    }

    // define a list of common english stop words
    let stopWords = [
        'a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by','for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with'
    ];

    // convert text to lowercase and split into words
    let words = text.toLowerCase().split(/\s+/);

    // create a new array to store words that are not stop words
    let filteredWords = [];

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // if the word is not a stop word, add it to the result
        if (stopWords.indexOf(word) === -1)
        {
            filteredWords.push(word);
        }
    }

    // join the filtered words back into a string
    let result = filteredWords.join(' ');

    // return the cleaned text
    return result;
}

//----//

let example = "This is a simple test to see how the stop words are removed.";

console.log(removeStopWords(example));

//----//

/*
simple test see how stop words removed
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

