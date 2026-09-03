// calculateSingleMode.js

function calculateSingleMode(numbers)
{
    if (!numbers || numbers.length === 0)
    {
        return null;
    }

    let frequencyMap = {};
    for (let i = 0; i < numbers.length; i++)
    {
        let num = numbers[i];
        if (frequencyMap[num])
        {
            frequencyMap[num] = frequencyMap[num] + 1;
        }
        else
        {
            frequencyMap[num] = 1;
        }
    }

    let maxFrequency = 0;
    let mode = null;

    let keys = Object.keys(frequencyMap);
    for (let i = 0; i < keys.length; i++)
    {
        let key = keys[i];
        let freq = frequencyMap[key];

        if (freq > maxFrequency)
        {
            maxFrequency = freq;
            mode = Number(key);
        }
    }

    return mode;
}

// returns 2 (ignores 3)
console.log(calculateSingleMode([1, 2, 2, 3, 3])); 

//----//

/*
2
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

