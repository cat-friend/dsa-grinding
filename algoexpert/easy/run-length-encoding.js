function runLengthEncoding(string) {
  // Write your code here.
  let counter = 1;
  let referenceChar = string[0]
  const newString = [];
  for (let i = 1; i < string.length; i++) {
    let currChar = string[i];
    if (currChar === referenceChar) {
      counter++
    }
    else {
      if (counter) {
        newString.push(`${counter}${referenceChar}`);
      }
      counter = 1;
      referenceChar = currChar;
    }
    if (counter === 9) {
      newString.push(`${counter}${referenceChar}`);
      counter = 0;
    }
  }
  newString.push(`${counter}${referenceChar}`);
  return newString.join("");
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
