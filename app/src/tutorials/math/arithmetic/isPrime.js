// isPrime.js

// checks if a number n is prime
function isPrime(n)
{
    // numbers less than 2 are not prime
    if (n < 2)
    {
        return false;
    }

    // loop from 2 up to the square root of n
    // if n is divisible by any of these, it's not prime
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
    {
        // check if i divides n evenly
        if (n % i === 0)
        {
            // found a divisor, n is not prime
            return false;
        }
    }

    // no divisors found, n is prime
    return true;
}

//----//

// example usage: check if 5 is prime
console.log(isPrime(5));

//----//

/*
true
*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

