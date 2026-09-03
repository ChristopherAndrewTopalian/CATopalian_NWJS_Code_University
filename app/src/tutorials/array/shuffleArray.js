// shuffleArray.js

// array of items we want to shuffle
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

// function to shuffle an array randomly
function shuffleArray(whichArray)
{
    // loop backwards through the array
    for (let i = whichArray.length - 1; i > 0; i--)
    {
        // pick a random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));

        // swap elements at i and j
        let temp = whichArray[i];
        whichArray[i] = whichArray[j];
        whichArray[j] = temp;
    }

    // return the shuffled array
    return whichArray;
}

//----//

// call the function and pass our array
console.log(shuffleArray(ourNumbers));

//----//

/*
Array(5) [ 23, 4, 543, 12, 875 ]
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

