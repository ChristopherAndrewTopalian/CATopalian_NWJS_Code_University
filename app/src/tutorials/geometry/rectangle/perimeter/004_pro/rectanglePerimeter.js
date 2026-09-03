// rectanglePerimeter.js

function rectanglePerimeter(length, width)
{
    let numLength = parseFloat(length);

    let numWidth = parseFloat(width);
    
    if (isNaN(numLength) || isNaN(numWidth))
    {
        return "Error: Invalid numbers.";
    }

    if (numLength <= 0 || numWidth <= 0)
    {
        return "Error: Must be greater than zero.";
    }
    
    return 2 * (numLength + numWidth);
}
    
// Where are we running?
if (typeof window !== 'undefined')
{
    // We are in a web browser
    console.log("Loaded in Browser Environment");
}
else if (typeof process !== 'undefined')
{
    // We are in a Node.js server/terminal
    module.exports = rectanglePerimeter;

    console.log("Loaded in Node.js Environment");
}

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

