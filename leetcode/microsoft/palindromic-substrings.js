/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

// APPROACH
// make two arrays - forward and backwards
// iterate through the string
// push characters into one and unshift characters into the other --> then compare --> are they equal?
// if equal, palindromeCount++, keep the fwds and backwards arrays
// if not equal, clear the fwds and backwards arrays
// add length of string to final palindromeCount

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let palindromeCount = 0;
    const fwd = [];
    const back = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        fwd.push(char);
        back.unshift(char);
        console.log("fwd", fwd, "\nback", back, "\ntf", fwd.join("") == back.join(""))
        if (fwd.join("") == back.join("")) {
            if (fwd.length > 1 && back.length > 1) {
                palindromeCount++
            }
        }
        else {
            fwd.splice(0);
            back.splice(0);
        }
    }
    return palindromeCount + s.length;
};

console.log(countSubstrings("aaa"));
