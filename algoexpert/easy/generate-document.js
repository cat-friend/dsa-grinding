function generateDocument(characters, document) {
    if (document == "") {
        return true;
    }
    characters = [...characters]
    for (let i = 0; i < document.length; i++) {
        let currChar = document[i];
        let currCharIndexInCharacters = characters.indexOf(currChar);
        if (currCharIndexInCharacters > -1) {
            characters.splice(currCharIndexInCharacters, 1);
        }
        else return false;
    }
    return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;

// try using a hash table
