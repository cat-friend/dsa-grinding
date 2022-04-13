function isPalindrome(string) {
    let end = string.length - 1;
    for (let i = 0; i < Math.ceil(string.length / 2); i++) {
        if (string[i] !== string[end]) {
            return false;
        }
        end--
    }
    return true
  }

  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
