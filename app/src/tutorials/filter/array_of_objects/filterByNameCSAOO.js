// filterByNameCSAOO.js
// returns only the items from an array of objects that have a name matching the given target name (case sensitive)

// sample array of people with names and dates
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

function filterByNameCSAOO(whichArray, targetName)
{
    // start with an empty array to hold the results
    let result = [];

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // get the name from the current item
        let currentName = whichArray[z].name;

        // if the name matches the target name, add it to the result array
        if (currentName === targetName)
        {
            result.push(whichArray[z]);
        }
    }

    // return the new array containing only items that match the given name
    return result;
}

//----//

// test the function
let filteredPeople = filterByNameCSAOO(
    people,
    "Jane"
);

// print the filtered array to the console
console.log(JSON.stringify(filteredPeople));

//----//

/*
[{"name":"Jane","date":"2024-05-01 10:00:00"}]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

