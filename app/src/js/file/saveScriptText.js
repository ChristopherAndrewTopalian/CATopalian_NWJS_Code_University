// saveScriptText.js

// const fs = require('fs');
// const path = require('path');

function saveScriptText(targetPath, fileContent)
{
    try 
    {
        // Ensure we have the full absolute path
        let fullPath = path.isAbsolute(targetPath) ? targetPath : path.join(process.cwd(), targetPath);
        
        // Write the text back to the file
        fs.writeFileSync(fullPath, fileContent, 'utf8');
        
        console.log(`Saved: ${fullPath}`);
        return true;
    } 
    catch (error) 
    {
        console.log(`Failed to save file: ${error.message}`);
        return false;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

