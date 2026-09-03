// getSelectedTextMouseUpRemovable.js

function getSelectedText()
{
    let selectedText = window.getSelection().toString();

    return selectedText;
}

//----//

console.log(getSelectedText());

//----//

function mouseUpHandler()
{
    let selectedText = getSelectedText();

    console.log(selectedText);
}

// add the event listener
window.addEventListener("mouseup", mouseUpHandler);

//----//

setTimeout(function()
{
    console.log("removing mouseup listener now");

    // remove the mouseup event listener by referencing the handler function
    window.removeEventListener("mouseup", mouseUpHandler);
}, 30000);

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

