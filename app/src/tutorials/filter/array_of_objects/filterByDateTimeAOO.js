// filterByDateTimeAOO.js
// returns only the items from an array of objects that have a date and time matching the given target date-time

// sample array of people with dates
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

function filterByDateTimeAOO(whichArray, targetDateTime)
{
    // start with an empty array to hold the results
    let result = [];

    // convert the target date-time string into a Date object
    let target = new Date(targetDateTime);

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // get the date string from the current item
        let dateString = whichArray[z].date;

        // convert the item's date string into a Date object
        let itemDate = new Date(dateString);

        // compare exact date-time values (down to the millisecond)
        if (itemDate.getTime() === target.getTime())
        {
            result.push(whichArray[z]);
        }
    }

    // return the new array containing only items with the exact date-time match
    return result;
}

//----//

// test the function
let filteredPeople = filterByDateTimeAOO(
    people,
    "2025-02-01 12:00:00"
);

// print the filtered array to the console
console.log(JSON.stringify(filteredPeople));

//----//

/*
[{"name":"Ariana","date":"2025-02-01 12:00:00"}]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

