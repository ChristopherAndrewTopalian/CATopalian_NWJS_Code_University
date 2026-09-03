// stemWords.js

function stemWords(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        return '';
    }

    // common suffixes to remove
    let suffixes = ['ing', 'ed', 'es', 's'];

    // split text into words using non-word characters as separators
    let words = text.split(/\W+/);

    // prepare array to hold the stemmed words
    let stemmedWords = [];

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // skip empty words
        if (word.length === 0)
        {
            continue;
        }

        // convert word to lowercase for uniform processing
        let lowerWord = word.toLowerCase();

        // check and remove any matching suffix
        for (let j = 0; j < suffixes.length; j++)
        {
            let suffix = suffixes[j];

            // only remove suffix if the word is longer than the suffix + 1 letter
            if (lowerWord.length > suffix.length + 1 && lowerWord.endsWith(suffix))
            {
                // remove the suffix
                lowerWord = lowerWord.slice(0, lowerWord.length - suffix.length);

                // exit the suffix loop once one is removed
                break;
            }
        }

        // get the length of the word after suffix removal
        let len = lowerWord.length;

        // get the last and second-to-last characters
        let lastChar = lowerWord.charAt(len - 1);
        let secondLastChar = lowerWord.charAt(len - 2);

        // combine them to get the last two letters
        let lastTwo = secondLastChar + lastChar;

        // list of double letter endings we want to preserve
        let preserveDoubles = ['ss', 'll', 'tt'];

        // if the last two letters are the same and not in the preserve list, trim one
        if (len > 2 && lastChar === secondLastChar && preserveDoubles.indexOf(lastTwo) === -1)
        {
            // remove the repeated last character
            lowerWord = lowerWord.slice(0, len - 1);
        }

        // add the stemmed word to the result list
        stemmedWords.push(lowerWord);
    }

    // join all stemmed words into a single string
    return stemmedWords.join(' ');
}

//----//

console.log(stemWords("running jumped cats jumping misses stopping filler butter"));

//----//

/*
run jump cat jump miss stop filler butter
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

