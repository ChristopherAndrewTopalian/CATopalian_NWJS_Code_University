// imgBrightnessContrastSet.js

function imgBrightnessContrastSet()
{
    let theImages = document.getElementsByTagName('img');

    for (let x = 0; x < theImages.length; x++)
    {
        theImages[x].style.filter = 'contrast(120%) brightness(150%)';
    }
}

//----//

imgBrightnessContrastSet();

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

