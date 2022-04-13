function caesarCipherEncryptor(string, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    string = [...string];
    string.forEach((ele, i) => {
        const newCharIndex = (alphabet.indexOf(ele) + key) % 26;
        string[i] = alphabet[newCharIndex];
    })
    return string.join("");
  }

  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
