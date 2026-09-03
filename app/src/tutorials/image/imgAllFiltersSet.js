// imgAllFiltersSet.js

// define filter sets as objects
let filters001 =
{
    // brightness: normal 1, 1.5 = 150%
    // min = 0, max = 10
    brightness: 1.5,

    // contrast: normal 1, 1.2 = 120%
    // min = 0, max = 10
    contrast: 1.2, 

    // saturate: color intensity
    // min = 0, max = 10
    saturate: 1.5, 

    // grayscale: 0 = no grayscale, 1 = fully gray
    // min = 0, max = 1
    grayscale: 0,

    // sepia: 0 = none, 1 = full sepia
    // min = 0, max = 1
    sepia: 0.1, 

    // hueRotate: degrees for hue rotation
    // min = 0, max = 360
    hueRotate: 30,

    // invert: 0 = no invert, 1 = full invert
    // min = 0, max = 1
    invert: 0,

    // opacity: 0 = transparent, 1 = opaque
    // min = 0, max = 1
    opacity: 0.9,

    // blur: blur radius in px
    // min = 0, max = 100
    blur: 0,

    // dropShadow: CSS drop shadow string (offset-x offset-y blur-radius color)
    // min = no shadow (0px 0px 0px transparent), max = any visually valid value
    dropShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)'
};

// applys a filter set to all images
function imgAllFiltersSet(filterSet)
{
    let theImages = document.getElementsByTagName('img');

    for (let x = 0; x < theImages.length; x++)
    {
        theImages[x].style.filter =
        'brightness(' + filterSet.brightness + ')' +
        ' contrast(' + filterSet.contrast + ')' +
        ' saturate(' + filterSet.saturate + ')' +
        ' grayscale(' + filterSet.grayscale + ')' +
        ' sepia(' + filterSet.sepia + ')' +
        ' hue-rotate(' + filterSet.hueRotate + 'deg)' +
        ' invert(' + filterSet.invert + ')' +
        ' opacity(' + filterSet.opacity + ')' +
        ' blur(' + filterSet.blur + 'px)' +
        ' drop-shadow(' + filterSet.dropShadow + ')';
    }
}

//----//

imgAllFiltersSet(filters001);

//----//


// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

