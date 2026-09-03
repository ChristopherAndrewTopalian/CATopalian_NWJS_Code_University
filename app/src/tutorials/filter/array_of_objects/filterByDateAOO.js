// filterByDateAOO.js
// returns only the items from an array of objects that have a date matching the given target date

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

function filterByDateAOO(whichArray, targetDate)
{
    // start with an empty array to hold the results
    let result = [];

    // convert the target date string into a Date object
    let target = new Date(targetDate);

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // get the date string from the current item
        let dateString = whichArray[z].date;

        // convert the item's date string into a Date object
        let itemDate = new Date(dateString);

        // if the item's date is exactly the same as the target date, add it to the result array
        if (itemDate.getTime() === target.getTime())
        {
            result.push(whichArray[z]);
        }
    }

    // return the new array containing only items with the exact date match
    return result;
}

//----//

// test the function
let filteredPeople = filterByDateAOO(
    people,
    "2024-05-01 10:00:00"
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

