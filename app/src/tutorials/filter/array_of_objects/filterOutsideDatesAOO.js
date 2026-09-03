// filterOutsideDatesAOO.js
// returns only the items from an array of objects that have a date outside the given start and end dates

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

function filterOutsideDatesAOO(whichArray, startDate, endDate)
{
    // start with an empty array to hold the results
    let result = [];

    // convert the start and end date strings into Date objects
    let start = new Date(startDate);
    let end = new Date(endDate);

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // get the date string from the current item
        let dateString = whichArray[z].date;

        // convert the item's date string into a Date object
        let itemDate = new Date(dateString);

        // if the item's date is before the start or after the end, add it to the result array
        if (itemDate < start || itemDate > end)
        {
            result.push(whichArray[z]);
        }
    }

    // return the new array containing only items outside the start/end range
    return result;
}

//----//

// test the function
let filteredPeople = filterOutsideDatesAOO(
    people,
    "2024-01-01 00:00:00",
    "2024-12-31 23:59:59"
);

// print the filtered array to the console
console.log(JSON.stringify(filteredPeople));

//----//

/*
[{"name":"Jennifer","date":"2023-03-12 15:30:00"},{"name":"Ariana","date":"2025-02-01 12:00:00"}]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

