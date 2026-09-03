// countWordOccurrences.js

function countWordOccurrences(text, wordToCount)
{
    // if either input is missing, return 0
    if (!text || !wordToCount)
    {
        return 0;
    }

    // convert both text and word to lowercase to make the search case-insensitive
    let lowerText = text.toLowerCase();
    let lowerWord = wordToCount.toLowerCase();

    // split the text into words using space or punctuation
    let words = lowerText.split(/\W+/);

    // set up a counter
    let count = 0;

    // go through each word in the array
    for (let i = 0; i < words.length; i++)
    {
        // if the word matches, increment the counter
        if (words[i] === lowerWord)
        {
            count = count + 1;
        }
    }

    // return the total count
    return count;
}

//----//

let sampleText = "This is a test. This test is only a test.";

// 3
console.log(countWordOccurrences(sampleText, "test"));

// 2
console.log(countWordOccurrences(sampleText, "is"));

// 1
console.log(countWordOccurrences(sampleText, "only"));

//----//

/*
3
2
1
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

