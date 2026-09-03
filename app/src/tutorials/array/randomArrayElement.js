// randomArrayElement.js

//----//

// array of items we want to pick from randomly
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

// function to get a random element from an array
function randomArrayElement(whichArray)
{
    // get a random index from 0 to array length - 1
    let randomIndex = Math.floor(Math.random() * whichArray.length);

    // pick the element at the random index
    let randomElement = whichArray[randomIndex];

    // print the randomly selected element
    console.log('Random element chosen: ' + randomElement);

    // return the element in case we want to use it elsewhere
    return randomElement;
}

//----//

// call the function and pass our array
console.log(randomArrayElement(ourNumbers));

//----//

/*
543
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

