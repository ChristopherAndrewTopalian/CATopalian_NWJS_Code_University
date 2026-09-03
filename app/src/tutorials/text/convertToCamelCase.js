// convertToCamelCase.js

function convertToCamelCase(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string if input is invalid
        return '';
    }

    // split the text into words using space, underscore, or hyphen
    let words = text.split(/[\s_-]+/);

    // convert the first word to lowercase
    let camelCase = words[0].toLowerCase();

    // loop through remaining words and capitalize the first letter of each
    for (let i = 1; i < words.length; i++)
    {
        let word = words[i].toLowerCase();
        camelCase = camelCase + word.charAt(0).toUpperCase() + word.slice(1);
    }

    // return the camelCase result
    return camelCase;
}

//----//

// helloWorld
console.log(convertToCamelCase("hello world"));

// convertToCamelCase
console.log(convertToCamelCase("convert_to_camel_case"));

// convertToCamelCase
console.log(convertToCamelCase("Convert-To-Camel-Case"));

//----//

/*
helloWorld
convertToCamelCase
convertToCamelCase
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

