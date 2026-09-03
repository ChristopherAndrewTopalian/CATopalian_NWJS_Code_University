// getTutorialsData.js

function getTutorialsData(baseDir)
{
    let structure = [];
    
    if (!fs.existsSync(baseDir))
    {
        console.warn("Directory does not exist: " + baseDir);
        return structure;
    }

    // Read everything in the base directory
    let items = fs.readdirSync(baseDir);

    for (let i = 0; i < items.length; i++)
    {
        let item = items[i];
        let itemPath = path.join(baseDir, item);
        let stat = fs.statSync(itemPath);

        // If it is a folder (e.g., '001_print')
        if (stat.isDirectory())
        {
            let subItems = fs.readdirSync(itemPath);
            let jsFiles = [];

            for (let j = 0; j < subItems.length; j++)
            {
                let f = subItems[j];
                if (f.toLowerCase().endsWith('.js'))
                {
                    jsFiles.push(f);
                }
            }

            // Only add the folder to our list if it actually contains JS files
            if (jsFiles.length > 0)
            {
                structure.push({
                    folderName: item,
                    folderPath: itemPath,
                    scripts: jsFiles
                });
            }
        }
    }

    return structure;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

