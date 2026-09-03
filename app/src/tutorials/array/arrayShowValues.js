// arrayShowValues.js

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

function arrayShowValues(whichArray, whichEntry)
{
    if (whichArray.length === 0)
    {
        return [];
    }

    return Object.values(whichArray[whichEntry]);
}

//----//

console.log(arrayShowValues(people, 0)); 

//----//

/*
Array [ "Jane", "2024-05-01 10:00:00" ]
​
0: "Jane"
​
1: "2024-05-01 10:00:00"
​
length: 2
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

