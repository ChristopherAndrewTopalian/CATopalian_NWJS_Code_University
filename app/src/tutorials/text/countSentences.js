// countSentences.js

function countSentences(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return 0 if input is invalid
        return 0;
    }

    // split the text into possible sentences using . ? or ! followed by a space or end of string
    let sentences = text.split(/[.!?](\s|$)/);

    // count only non empty trimmed parts
    let count = 0;

    for (let i = 0; i < sentences.length; i++)
    {
        let part = sentences[i].trim();

        if (part.length > 0)
        {
            count = count + 1;
        }
    }

    // return the total sentence count
    return count;
}

//----//

let paragraph = "Hello! How are you doing? This is an example. It's simple, right?";

console.log(countSentences(paragraph));

//----//

/*
4
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

