// randomIntMinMax.js

// generates a random integer between min and max (inclusive)
function randomIntMinMax(min, max)
{
    // Math.random() generates a decimal between 0 (inclusive) and 1 (exclusive)
    // multiplying by (max - min + 1) scales the range to include max
    // Math.floor rounds down to the nearest integer
    // adding min shifts the range to start at min instead of 0
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // return the resulting random number
    return randomNumber;
}

//----//

// example usage: random number between 1 and 100
console.log(randomIntMinMax(1, 100));

//----//

/*
57
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

