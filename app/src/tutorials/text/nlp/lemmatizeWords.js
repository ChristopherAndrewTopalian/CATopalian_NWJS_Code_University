// lemmatizeWords.js

function lemmatizeWords(text)
{
    // check if the input is missing or not a string
    if (!text || typeof text !== 'string')
    {
        // return an empty array if input is invalid
        return [];
    }

    // convert text to lowercase to normalize
    let lowerText = text.toLowerCase();

    // split text into words using non-word characters
    let words = lowerText.split(/\W+/);

    // manual dictionary of common word forms
    let lemmaDict = {
    'am': 'be',
    'are': 'be',
    'is': 'be',
    'was': 'be',
    'were': 'be',
    'being': 'be',
    'been': 'be',

    'has': 'have',
    'have': 'have',
    'had': 'have',
    'having': 'have',

    'does': 'do',
    'do': 'do',
    'did': 'do',
    'doing': 'do',

    'ran': 'run',
    'running': 'run',

    'ate': 'eat',
    'eating': 'eat',

    'went': 'go',
    'going': 'go',

    'saw': 'see',
    'seeing': 'see',

    'bought': 'buy',
    'buying': 'buy',

    'better': 'good',
    'best': 'good',

    'worse': 'bad',
    'worst': 'bad',

    'people': 'person',
    'mice': 'mouse',
    'geese': 'goose',

    'feet': 'foot',
    'teeth': 'tooth',
    'men': 'man',
    'women': 'woman',

    'happier': 'happy',
    'happiest': 'happy',

    'easier': 'easy',
    'easiest': 'easy'
};


    // create array to hold lemmatized words
    let lemmatizedWords = [];

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // skip empty strings from split
        if (word.length === 0)
        {
            continue;
        }

        // check if the word is in the dictionary, use the lemma if found
        if (lemmaDict[word])
        {
            lemmatizedWords.push(lemmaDict[word]);
        }
        else
        {
            // if no lemma found, keep the original word
            lemmatizedWords.push(word);
        }
    }

    // return the list of lemmatized words
    return lemmatizedWords;
}

//----//

// example usage
let sentence = "The people waited 30 minutes before running after eating their meals while going to the mall.";

console.log(lemmatizeWords(sentence));

//----//

/*
[
    "the", "person", "waited", "30", "minutes", "before", "run", "after", "eat", "their", "meals", "while",
    "go", "to", "the", "mall"
]

*/

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting

