/**
 * You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.



Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
 */

/** Approach
 * Iterate through t, if (s.includes(t[i]) continue) else, return t[i]
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// first try
var findTheDifferenceFirstTry = function(s, t) {
    for (const letter of s) {
        t = t.replace(letter, "")
    }
    return t
};

/**
 * Results:
 * Runtime: 76 ms (7%)
 * Memory: 46 (15%)
 */


// second try
/**
 * Notes:
 * First try is slow because you have to rebuild the string when you .replace -- so it turns out to be n^n space and time complexity
 * better way to do it in O(n) space and time complexity:
 */

function findTheDifference(s, t) {
    const sumS = s.split("").reduce((codeSum, currChar) => codeSum + currChar.charCodeAt(0), 0)
    const sumT = t.split("").reduce((codeSum, currChar) => codeSum + currChar.charCodeAt(0), 0)

    return String.fromCharCode(sumT - sumS)
}

/**
 * Results:
 * Runtime: 62 ms (48%)
 * Memory: 42.04 mb (98%)
 */