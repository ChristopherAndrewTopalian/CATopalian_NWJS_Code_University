// truncateText.js

function truncateText(text, maxLength)
{
    // check if text is invalid or maxLength is not a number
    if (!text || typeof text !== 'string' || typeof maxLength !== 'number')
    {
        // return empty string if input is invalid
        return '';
    }

    // if text is short enough, return as-is
    if (text.length <= maxLength)
    {
        return text;
    }

    // cut the text and add ellipsis
    let truncated = text.slice(0, maxLength);

    // return the shortened text
    return truncated + '...';
}

//----//

// This is a long sente...
console.log(truncateText("This is a long sentence that needs truncating.", 20));

//----//

/*
This is a long sente...
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

