// findNameAOO.js

function findNameAOO(whichArray, whichName) 
{
    let result = whichArray.find(function(person)
    {
        return person.name === whichName;
    });

    return result;
}

//----//

// example:

let people = [
    {
        name: 'Jane',
        location: 'America'
    },

    {
        name: 'Jennifer',
        location: 'Russia'
    }
];

//----//

let found = findNameAOO(people, 'Jennifer');

console.log(found);

//----//

/*
Object { name: "Jennifer", location: "Russia" }

Finder Function (Find by Name)
This function searches any list of people (objects) for a specific name you provide.
 */

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

