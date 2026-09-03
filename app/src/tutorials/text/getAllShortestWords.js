// getAllShortestWords.js

function getAllShortestWords(text)
{
    // check if text is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return an empty array for invalid input
        return [];
    }

    // remove punctuation and split the text into words
    let words = text.replace(/[^\w\s]/g, '').split(' ');

    // filter out empty words
    let validWords = [];

    for (let i = 0; i < words.length; i++)
    {
        if (words[i].length > 0)
        {
            validWords.push(words[i]);
        }
    }

    // if no valid words, return empty array
    if (validWords.length === 0)
    {
        return [];
    }

    // initialize list of shortest words and minimum length
    let shortestWords = [];
    let minLength = validWords[0].length;

    for (let i = 0; i < validWords.length; i++)
    {
        let word = validWords[i];

        if (word.length < minLength)
        {
            shortestWords = [word];
            minLength = word.length;
        }
        else if (word.length === minLength)
        {
            shortestWords.push(word);
        }
    }

    // return all shortest words
    return shortestWords;
}

//----//

console.log(getAllShortestWords("I am a human that enjoys code very much."));

//----//

/*
[ 'I', 'a' ]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

