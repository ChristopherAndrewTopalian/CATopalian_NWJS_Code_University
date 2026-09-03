// getWordFrequencies.js

function getWordFrequencies(text)
{
    // if the input is missing or not a string, return an empty object
    if (!text || typeof text !== 'string')
    {
        return {};
    }

    // convert the text to lowercase for case insensitive counting
    let lowerText = text.toLowerCase();

    // split the text into words using regex to remove punctuation
    let words = lowerText.split(/\W+/);

    // create an object to store the frequencies
    let frequencies = {};

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // skip empty strings caused by consecutive punctuation
        if (word.length > 0)
        {
            // if the word is already in the object, increment its count
            if (frequencies[word])
            {
                frequencies[word] = frequencies[word] + 1;
            }
            else
            {
                // otherwise, set the count to 1
                frequencies[word] = 1;
            }
        }
    }

    // return the object with word frequencies
    return frequencies;
}

//----//

let sampleText = "This is a test. This test is only a test.";

// show the frequency of each word
console.log(getWordFrequencies(sampleText));

//----//

/*
{
    this: 2,
    is: 2,
    a: 2,
    test: 3,
    only: 1
}
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

