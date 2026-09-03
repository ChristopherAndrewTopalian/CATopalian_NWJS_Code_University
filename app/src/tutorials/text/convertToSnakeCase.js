// convertToSnakeCase.js

function convertToSnakeCase(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return empty string if input is invalid
        return '';
    }

    // replace camelCase with space before uppercase letters
    text = text.replace(/([a-z])([A-Z])/g, '$1 $2');

    // convert text to lowercase and replace spaces, hyphens, or underscores with a single underscore
    let snakeCase = text.toLowerCase().replace(/[\s\-]+/g, '_');

    // return the converted text
    return snakeCase;
}

//----//

// hello_world
console.log(convertToSnakeCase("hello world"));

// convert_to_snake_case
console.log(convertToSnakeCase("convertToSnakeCase"));

// convert_to_snake_case
console.log(convertToSnakeCase("Convert-To_Snake Case"));

//----//

/*
hello_world
convert_to_snake_case
convert_to_snake_case
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

