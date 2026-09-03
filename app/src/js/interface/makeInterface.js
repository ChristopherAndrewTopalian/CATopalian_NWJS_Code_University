// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    mainDiv.style.height = '100%';
    ba(mainDiv);

    //-//

    let leftPanel = ce('div');
    leftPanel.id = 'leftPanel';
    leftPanel.style.display = 'flex';
    leftPanel.style.flexDirection = 'column';
    leftPanel.style.border = 'solid 1px white';
    leftPanel.style.overflowY = 'scroll';
    leftPanel.style.width = '25%';
    leftPanel.style.gap = '5px'; // Added gap for button spacing
    leftPanel.style.padding = '10px';
    leftPanel.style.resize = 'both';
    mainDiv.append(leftPanel);

    let rightPanel = ce('code');
    rightPanel.className = 'code';
    rightPanel.id = 'rightPanel';
    rightPanel.textContent = 'Welcome. Select a script to edit.';
    rightPanel.style.padding = '4px 8px';
    
    // Create an empty attribute to hold our active file path
    rightPanel.setAttribute('data-current-file', '');
    
    rightPanel.setAttribute('data-language', 'js');
    rightPanel.style.height = '94vh';
    rightPanel.contentEditable = 'true';
    rightPanel.style.border = 'solid 1px white';
    rightPanel.style.overflowY = 'scroll';
    rightPanel.style.width = '75%';
    mainDiv.append(rightPanel);

    //-//

    leftPanel.append(makeTitleOfApp());

    //-//
    
    // SAVE BUTTON
    let btnSave = ce('button');
    btnSave.textContent = '💾Save';
    btnSave.style.alignSelf = 'stretch';
    btnSave.style.backgroundColor = 'rgb(0, 217, 255)'; // Make it stand out
    btnSave.style.color = 'black';
    btnSave.style.fontWeight = 'bold';
    btnSave.onmouseover = function() { hoverSound(); };
    btnSave.onclick = function()
    {
        clickSound();

        // Check if a file is actually loaded
        let currentPath = rightPanel.getAttribute('data-current-file');

        if (currentPath === '')
        {
            alert("No file is currently loaded to save.");
            return;
        }

        // Grab the raw text from the code box. 
        // .textContent is perfect here because it naturally strips out any <span> tags your highlighter added!
        let textToSave = rightPanel.textContent;

        // Save it
        let isSaved = saveScriptText(currentPath, textToSave);

        // Give the user visual feedback
        if (isSaved)
        {
            btnSave.textContent = '✅ Saved!';
            btnSave.style.backgroundColor = 'rgb(0, 255, 100)';
            
            // Reset button text after 2 seconds
            setTimeout(function()
            {
                btnSave.textContent = '💾 Save';
                btnSave.style.backgroundColor = 'rgb(0, 217, 255)';
            }, 2000);
        }
    };
    leftPanel.append(btnSave);

    // Add a visual separator
    leftPanel.append(ce('hr'));

    //-//

    //----//
    // GENERATE BUTTONS AUTOMATICALLY
    //----//

    let defaultAppLabel = ce('div');
    defaultAppLabel.textContent = 'Files:';
    leftPanel.append(defaultAppLabel);

    // Get the data
    let baseFolder = path.join('src', 'tutorials');
    let folderData = getTutorialsData(baseFolder);

    // Give the data and the UI panels to our builder function
    populateTutorialButtons(leftPanel, rightPanel, folderData);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

