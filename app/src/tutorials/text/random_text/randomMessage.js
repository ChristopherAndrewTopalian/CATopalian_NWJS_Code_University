// randomMessage.js

let greetings =
[
    "Hi",
    "Howdy.",
    "How ya doing?",
    "You having fun?",
    "Glad you are here.",
    "Nice weather today.",
    "It's such a nice day out."
];

function randomMessage(whichArray)
{
    let randomMessage = whichArray[Math.floor(Math.random() * whichArray.length)];

    return randomMessage;
}

//----//

console.log(randomMessage(greetings));

//----//

/*
Glad you are here.
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

