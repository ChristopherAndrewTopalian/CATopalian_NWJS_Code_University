// rectanglePerimeter.js

function rectanglePerimeter(length, width)
{
    let numLength = parseFloat(length);

    let numWidth = parseFloat(width);
    
    // Edge Case 1: Did they type words into either box?
    if (isNaN(numLength) || isNaN(numWidth)) {
    return "Error: Both length and width must be valid numbers.";
    }
    
    // Edge Case 2: Are either of the numbers negative or zero?
    if (numLength <= 0 || numWidth <= 0)
    {
        return "Error: Both dimensions must be greater than zero.";
    }
    
    let perimeterResult = 2 * (numLength + numWidth);
    
    return perimeterResult;
}

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

