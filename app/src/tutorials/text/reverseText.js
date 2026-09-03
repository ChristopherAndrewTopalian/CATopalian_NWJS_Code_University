// reverseText.js

function reverseText(text)
{
    // check if input is missing
    if (!text)
    {
        return "";
    }

    // split the text into characters, reverse the array, and join it back into a string
    let reversed = text.split("").reverse().join("");

    // return the reversed string
    return reversed;
}

//----//

// "dlrow olleh"
console.log(reverseText("hello world"));

// "nuf si tpircsavaj"
console.log(reverseText("javascript is fun"));

// "54321"
console.log(reverseText("12345"));

//----//

/*
dlrow olleh
nuf si tpircsavaj
54321
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

