// capitalizeWords.js

function capitalizeWords(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string if input is invalid
        return '';
    }

    // split the text into words using space as separator
    let words = text.split(' ');

    // create a new array to hold the capitalized words
    let capitalizedWords = [];

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        if (word.length > 0)
        {
            // capitalize the first letter and add the rest of the word
            let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

            // add the capitalized word to the array
            capitalizedWords.push(capitalized);
        }
        else
        {
            // if the word is empty (extra space), push it as-is
            capitalizedWords.push('');
        }
    }

    // join the capitalized words back into a string
    let result = capitalizedWords.join(' ');

    // return the final string
    return result;
}

//----//

console.log(capitalizeWords("hello world from javascript"));

//----//

/*
Hello World From Javascript
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

