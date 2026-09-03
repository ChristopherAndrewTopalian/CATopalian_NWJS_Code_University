// readScriptText.js

function readScriptText(fullPath)
{
    try 
    {
        // Read the file and convert it directly to a text string
        let content = fs.readFileSync(fullPath, 'utf8');
        return content;
    } 
    catch (error) 
    {
        console.log(`Failed to read file: ${error.message}`);
        return `Error: Could not load the script.\n\n${error.message}`;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

