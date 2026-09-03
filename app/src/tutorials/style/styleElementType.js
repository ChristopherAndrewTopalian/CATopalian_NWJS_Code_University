// styleElementType.js

function styleElementType(whichElementType, whichBgColor, whichTextColor)
{
    let elements = document.getElementsByTagName(whichElementType);

    for (let x = 0; x < elements.length; x++)
    {
        elements[x].style.backgroundColor = whichBgColor;

        elements[x].style.color = whichTextColor;
    }
}

styleElementType('a', 'rgb(0, 255, 255)', 'black');

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

