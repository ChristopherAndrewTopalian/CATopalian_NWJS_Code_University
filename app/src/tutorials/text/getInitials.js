// getInitials

function getInitials(fullName)
{
    // check if input is missing or not a string
    if (!fullName || typeof fullName !== "string")
    {
        return "";
    }

    // split the name by spaces
    let parts = fullName.trim().split(" ");

    // create a variable to hold the initials
    let initials = "";

    // loop through each part of the name
    for (let i = 0; i < parts.length; i++)
    {
        // make sure the part has at least one character
        if (parts[i].length > 0)
        {
            // add the first character of the part to the initials
            initials = initials + parts[i][0];
        }
    }

    // return the initials in uppercase
    return initials.toUpperCase();
}

//----//

// JD
console.log(getInitials("john doe"));

// CT
console.log(getInitials("Christopher Topalian"));

// ABC
console.log(getInitials("alice b. cooper"));

// RS
console.log(getInitials("robert smith "));

// <empty string>
console.log(getInitials(""));

//----//

/*
JD
CT
ABC
RS
<empty string>
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

