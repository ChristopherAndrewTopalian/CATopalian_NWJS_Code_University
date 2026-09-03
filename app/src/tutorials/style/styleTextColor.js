// styleTextColor.js

function styleTextColor(whichColor)
{
    let ourStyle = document.createElement("style");

    ourStyle.textContent = "body * { color: " + whichColor + " !important; }";

    document.head.append(ourStyle);
}

//----//

styleTextColor("aqua");

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

