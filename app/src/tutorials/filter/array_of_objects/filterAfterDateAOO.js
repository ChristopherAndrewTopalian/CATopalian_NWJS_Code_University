// filterAfterDateAOO.js
// returns only the items from a array that have a date after the given cutoff date

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
    }
];

//----//

function filterAfterDateAOO(whichArray, cutoffDate)
{
    // start with an empty array to hold the results
    let result = [];

    // convert the cutoffDate string into a Date object
    let cutoff = new Date(cutoffDate);

    // loop through every item in the given array
    for (let z = 0; z < whichArray.length; z++)
    {
        // get the date string from the current item
        let dateString = whichArray[z].date;

        // convert the item's date string into a Date object
        let itemDate = new Date(dateString);

        // if the item's date is after the cutoff, add it to the result array
        if (itemDate > cutoff)
        {
            result.push(whichArray[z]);
        }
    }

    // return the new array containing only items after the cutoff date
    return result;
}

//----//

// test the function
let filteredPeople = filterAfterDateAOO(people, "2024-01-01 00:00:00");

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

