// filterShowAllAOO.js
// returns the entire array of objects without filtering (just shows everything)

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

function filterShowAllAOO(whichArray)
{
    // start with an empty array to hold the results
    let result = [];

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // just add every item to the result array
        result.push(whichArray[z]);
    }

    // return the new array containing everything
    return result;
}

//----//

// test the function
let allPeople = filterShowAllAOO(people);

// print the array to the console
console.log(JSON.stringify(allPeople));

//----//

/*
[{"name":"Jane","date":"2024-05-01 10:00:00"},{"name":"Jennifer","date":"2023-03-12 15:30:00"},{"name":"Tabitha","date":"2024-05-09 08:45:00"},{"name":"Ariana","date":"2025-02-01 12:00:00"}]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

