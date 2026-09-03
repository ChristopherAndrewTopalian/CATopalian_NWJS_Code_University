// randomFloatMinMax.js

// generates a random floating-point number between min and max (inclusive of min, exclusive of max)
function randomFloatMinMax(min, max)
{
    // Math.random() generates a decimal between 0 (inclusive) and 1 (exclusive)
    // multiplying by (max - min) scales the range to the desired width
    // adding min shifts the range to start at min instead of 0
    let randomFloat = Math.random() * (max - min) + min;

    // return the resulting random float
    return randomFloat;
}

//----//

// example usage: random float between 1 and 10
console.log(randomFloatMinMax(1, 10));

//----//

/*
3.746128394  (example output will vary)
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting


