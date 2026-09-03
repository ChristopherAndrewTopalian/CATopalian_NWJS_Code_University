// arrayProduct.js

// array of numbers we want to find the product of
let ourNumbers = [
    4, 875, 23, 543, 12
];

//----//

// function to multiply all numbers in an array
function arrayProduct(whichArray)
{
    // start with 1 since multiplying by 1 doesn't change value
    let product = 1;

    // loop through the array and multiply each element
    for (let i = 0; i < whichArray.length; i++)
    {
        // multiply current element with product
        product *= whichArray[i];
    }

    // return the product
    return product;
}

//----//

// call the function and pass our array
console.log(arrayProduct(ourNumbers));

//----//

/*
524538000
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

