// styleLinks.js

function styleLinks(whichBgColor, whichTextColor)
{
    let links = document.getElementsByTagName('a');

    for (let x = 0; x < links.length; x++)
    {
        links[x].style.backgroundColor = whichBgColor;

        links[x].style.color = whichTextColor;
    }
}

styleLinks('black', 'white');

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

