function firstNonRepeatingCharacter(string) {
    const lettersInString = {};
    for (const char of string) {
        if (lettersInString.hasOwnProperty(char)) {
            lettersInString[char]++;
        }
        else {
            lettersInString[char];
            lettersInString[char] = 1;
        }
    }
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (lettersInString[char] === 1) {
            return i;
        }
    }
    return -1
  }

  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
