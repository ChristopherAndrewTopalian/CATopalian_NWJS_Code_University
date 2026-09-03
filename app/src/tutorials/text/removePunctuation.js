// removePunctuation.js

function removePunctuation(text)
{
    // check if input is missing or not a string
    if (!text || typeof text !== "string")
    {
        return "";
    }

    // use a regular expression to remove punctuation characters
    let cleaned = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");

    // return the cleaned text
    return cleaned;
}

//----//

// Hello world
console.log(removePunctuation("Hello, world!"));

// Whats going on
console.log(removePunctuation("What's going on?"));

// Remove all punctuation
console.log(removePunctuation("Remove: all! punctuation."));

// No way
console.log(removePunctuation("No... way!!!"));

//----//

/*
Hello world
Whats going on
Remove all punctuation
No way
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

