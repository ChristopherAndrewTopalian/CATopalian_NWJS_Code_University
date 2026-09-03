// filterByYearMonthAOO.js
// returns only the items from an array of objects that have a date matching the given year and month (ignores day and time)

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

function filterByYearMonthAOO(whichArray, targetYear, targetMonth)
{
    // start with an empty array to hold the results
    let result = [];

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // get the date string from the current item
        let dateString = whichArray[z].date;

        // convert the item's date string into a Date object
        let itemDate = new Date(dateString);

        // check if the year and month match the target values
        if (
            itemDate.getFullYear() === targetYear &&
            itemDate.getMonth() === targetMonth
        )
        {
            result.push(whichArray[z]);
        }
    }

    // return the new array containing only items that match the given year and month
    return result;
}

//----//

// test the function
// note: months in JavaScript are zero-based (0 = january, 4 = may, etc.)
let filteredPeople = filterByYearMonthAOO(
    people,
    2024,
    4
);

// print the filtered array to the console
console.log(JSON.stringify(filteredPeople));

//----//

/*
[{"name":"Jane","date":"2024-05-01 10:00:00"},{"name":"Tabitha","date":"2024-05-09 08:45:00"}]
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

