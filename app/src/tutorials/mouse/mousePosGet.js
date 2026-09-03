// mousePosGet.js

function mousePosGet(event)
{
    let mousePos =
    {
        x: event.pageX,
        y: event.pageY
    };

    // return mouse coordinates as an object
    return mousePos;
}

//----//

// attach event listener
window.addEventListener("click", function(event)
{
    let pos = mousePosGet(event);

    console.log(pos);
}, false);

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

