/**
 * @param {string} s
 * @return {number}
 *

Given a string s, find the length of the longest substring without repeating characters.

aaab
^
substring = ["a"]
aaab
 ^
 char === substring[sujbstring.length - 1] --> is 0 < substring.length ? yes so longestSubstringLength = 1 --> reset the substring array;
APPROACH:
make a substring array where i push letters into it;
keep track of longestSubstringLength
iterate through string - is char === substring[substring.length - 1]?
if yes - look at length of longest substring -->
    is longestSubString = longestSubStringLength < substring.length ? substring.length : longestSubstringLength;
    substring.splice(0);
return longestSubstringLength;
EDGE CASES:
s.length > 1 and it's composed of a single repeating character - return length of single character;
!s.length - return 0

 */

var lengthOfLongestSubstring = function (s) {
    let substring = "";
    let substringLength = 0;
    for (const char of s) {
        if (substring.includes(char)) {
            substringLength = substringLength < substring.length ? substring.length : substringLength;
            const repeatingCharIndex = substring.indexOf(char);
            substring = substring.slice(repeatingCharIndex + 1);
        }
        substring = substring.concat(char);
    }
    return substringLength < substring.length ? substring.length : substringLength;
};

console.log(lengthOfLongestSubstring("dvdf"))
