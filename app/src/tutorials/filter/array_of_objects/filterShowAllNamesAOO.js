// filterShowAllNamesAOO.js
// returns an array of objects containing only the name property from each item

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

function filterShowAllNamesAOO(whichArray)
{
    // start with an empty array to hold the results
    let result = [];

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // add an object containing only the name property to the result
        result.push({ name: whichArray[z].name });
    }

    // return the new array containing all names
    return result;
}

//----//

// test the function
let allNames = filterShowAllNamesAOO(people);

// print the array to the console
console.log(JSON.stringify(allNames));

//----//

/*
[{"name":"Jane"},{"name":"Jennifer"},{"name":"Tabitha"},{"name":"Ariana"}]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

