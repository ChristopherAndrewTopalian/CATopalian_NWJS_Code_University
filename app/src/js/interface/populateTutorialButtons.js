// populateTutorialButtons.js

function populateTutorialButtons(panel, codeBox, dataStructure)
{
    for (let i = 0; i < dataStructure.length; i++)
    {
        let group = dataStructure[i];

        // Create the Section Title (The Folder Name)
        let sectionTitle = ce('div');
        // We start with a closed folder icon because they will be collapsed by default
        sectionTitle.textContent = '📁 ' + group.folderName;
        sectionTitle.style.fontWeight = 'bold';
        sectionTitle.style.marginTop = '0px';
        sectionTitle.style.marginBottom = '0px';
        sectionTitle.style.color = 'rgb(0, 217, 255)'; 
        sectionTitle.style.borderBottom = 'solid 1px gray';
        sectionTitle.style.cursor = 'pointer'; // Makes the mouse turn into a hand
        panel.append(sectionTitle);

        // Create the Container that will hold the buttons
        let btnContainer = ce('div');
        btnContainer.style.display = 'none'; // Hides the buttons initially
        btnContainer.style.flexDirection = 'column';
        btnContainer.style.gap = '5px'; // Keeps the buttons neatly spaced
        panel.append(btnContainer);

        // Add the Toggle Logic to the Title
        sectionTitle.onclick = function()
        {
            clickSound();

            // If it's hidden, show it and change the icon
            if (btnContainer.style.display === 'none')
            {
                btnContainer.style.display = 'flex';
                sectionTitle.textContent = '📂 ' + group.folderName;
            }
            // If it's showing, hide it and change the icon back
            else
            {
                btnContainer.style.display = 'none';
                sectionTitle.textContent = '📁 ' + group.folderName;
            }
        };

        // Create the buttons for the scripts inside this folder
        for (let j = 0; j < group.scripts.length; j++)
        {
            let file = group.scripts[j];
            let targetPath = path.join(group.folderPath, file);

            let btn = ce('button');
            btn.textContent = '📄 ' + file;
            btn.style.alignSelf = 'flex-start';
            btn.style.marginLeft = '10px'; 

            btn.onmouseover = function()
            {
                hoverSound();
            };

            // stop scroll arrow before it can spawn
            btn.onmousedown = function(e)
            {
                // e.button === 1 specifically targets the middle mouse wheel
                if (e.button === 1)
                {
                    e.preventDefault();
                }
            };

            btn.onauxclick = function(e)
            { 
                e.preventDefault(); // Extra safety measure
                clickSound(); 
                openInFileExplorer(targetPath); 
            };

            btn.oncontextmenu = function(e) { 
                e.preventDefault(); 
                clickSound(); 
                openInDefaultApp(targetPath); 
            };

            btn.onclick = function()
            {
                clickSound();
                codeBox.textContent = readScriptText(targetPath);
                codeBox.setAttribute('data-current-file', targetPath);
                applyCustomHighlighting();
            };
            // Append button to btnContainer
            btnContainer.append(btn);
        }
    }
}

function populateTutorialButtons_non_collapsable(panel, codeBox, dataStructure)
{
    for (let i = 0; i < dataStructure.length; i++)
    {
        let group = dataStructure[i];

        // Create the Section Title (The Folder Name)
        let sectionTitle = ce('div');
        sectionTitle.textContent = '📁 ' + group.folderName;
        sectionTitle.style.fontWeight = 'bold';
        sectionTitle.style.marginTop = '15px';
        sectionTitle.style.marginBottom = '5px';
        sectionTitle.style.color = 'rgb(0, 217, 255)'; 
        sectionTitle.style.borderBottom = 'solid 1px gray';
        panel.append(sectionTitle);

        // Create the buttons for the scripts inside this folder
        for (let j = 0; j < group.scripts.length; j++)
        {
            let file = group.scripts[j];
            let targetPath = path.join(group.folderPath, file);

            let btn = ce('button');
            btn.textContent = '📄 ' + file;
            btn.style.alignSelf = 'flex-start';
            btn.style.marginLeft = '10px'; 

            btn.onmouseover = function()
            {
                hoverSound();
            };

            btn.onauxclick = function()
            { 
                clickSound(); 
                openInFileExplorer(targetPath); 
            };

            btn.oncontextmenu = function(e) { 
                e.preventDefault(); 
                clickSound(); 
                openInDefaultApp(targetPath); 
            };

            btn.onclick = function()
            {
                clickSound();
                codeBox.textContent = readScriptText(targetPath);
                codeBox.setAttribute('data-current-file', targetPath);
                applyCustomHighlighting();
            };

            panel.append(btn);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

