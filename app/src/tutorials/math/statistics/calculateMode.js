// calculateMode.js

function calculateMode(numbers)
{
    // check if input is missing or empty
    if (!numbers || numbers.length === 0)
    {
        // return null if there is no data to process
        return null;
    }

    // create an empty object to store frequency of each number
    let frequencyMap = {};

    // loop through each number in the array
    for (let i = 0; i < numbers.length; i++)
    {
        let num = numbers[i];

        // if the number is already in the map, increase its count
        if (frequencyMap[num])
        {
            frequencyMap[num] = frequencyMap[num] + 1;
        }
        else
        {
            // otherwise, set its count to 1
            frequencyMap[num] = 1;
        }
    }

    // find the highest frequency
    let maxFrequency = 0;

    // loop through the frequency map using traditional for loop
    let keys = Object.keys(frequencyMap);
    for (let i = 0; i < keys.length; i++)
    {
        let key = keys[i];
        let freq = frequencyMap[key];

        if (freq > maxFrequency)
        {
            maxFrequency = freq;
        }
    }

    // now collect all numbers that have the max frequency
    let modes = [];

    for (let i = 0; i < keys.length; i++)
    {
        let key = keys[i];
        let freq = frequencyMap[key];

        if (freq === maxFrequency)
        {
            // convert key back to number and add to result
            modes.push(Number(key));
        }
    }

    // return the array of mode(s)
    return modes;
}

//----//

// example usage with a tie between 3 and 7
console.log(calculateMode([3, 7, 3, 1, 7, 2]));

//----//

/*
Array [3, 7]
0: 3
1: 7
length: 2
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

