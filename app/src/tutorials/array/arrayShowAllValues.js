// arrayShowAllValues.js

let people = [
    {
        name: "Jane",
        date: "2024-05-01 10:00:00"
    },

    {
        name: "Jennifer",
        date: "2023-03-12 15:30:00"
    },

    {
        name: "Tabitha",
        date: "2024-05-09 08:45:00"
    },

    {
        name: "Ariana",
        date: "2025-02-01 12:00:00"
    }
];

//----//

function arrayShowAllValues(whichArray)
{
    let valuesArray = [];

    // iterate over each object in the array
    for (let i = 0; i < whichArray.length; i++)
    {
        // get the current object
        let theObject = whichArray[i];

        // iterate over each value in the object
        let values = Object.values(theObject);

        for (let j = 0; j < values.length; j++)
        {
            valuesArray.push(values[j]);
        }
    }

    return valuesArray;
}

//----//

arrayShowAllValues(people);

//----//

/*
Array(8) [ "Jane", "2024-05-01 10:00:00", "Jennifer", "2023-03-12 15:30:00", "Tabitha", "2024-05-09 08:45:00", "Ariana", "2025-02-01 12:00:00" ]
​
0: "Jane"
​
1: "2024-05-01 10:00:00"
​
2: "Jennifer"
​
3: "2023-03-12 15:30:00"
​
4: "Tabitha"
​
5: "2024-05-09 08:45:00"
​
6: "Ariana"
​
7: "2025-02-01 12:00:00"
​
length: 8
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

