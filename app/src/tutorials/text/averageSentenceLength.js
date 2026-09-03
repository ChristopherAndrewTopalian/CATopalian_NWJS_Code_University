// averageSentenceLength.js

function averageSentenceLength(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        return 0;
    }

    // split the text into sentences using punctuation as delimiters
    let sentences = text.split(/[.!?]+/);

    // create a counter for total words
    let totalWords = 0;

    // create a counter for valid sentences (non empty after trimming)
    let sentenceCount = 0;

    // loop through each sentence
    for (let i = 0; i < sentences.length; i++)
    {
        // trim whitespace from the sentence
        let sentence = sentences[i].trim();

        // skip empty sentences
        if (sentence.length === 0)
        {
            continue;
        }

        // split the sentence into words by spaces
        let words = sentence.split(/\s+/);

        // add the number of words in this sentence to total
        totalWords = totalWords + words.length;

        // increment valid sentence counter
        sentenceCount = sentenceCount + 1;
    }

    // if there are no valid sentences, return 0
    if (sentenceCount === 0)
    {
        return 0;
    }

    // calculate average with decimal precision
    let average = totalWords / sentenceCount;

    // return the average rounded to 2 decimal places
    return Number(average.toFixed(2));
}

//----//

let exampleText = "This is the first sentence. Here's the second! Is this the third one? Yes, it is.";

console.log(averageSentenceLength(exampleText));

//----//

/*
4.00
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

