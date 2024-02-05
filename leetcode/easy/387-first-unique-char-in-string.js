/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */

function constructDictionary (string) {
    const dictionary = {};
    for (const char of string) {
        if (dictionary.hasOwnProperty(char)) {
            dictionary[char]++
        } else {
            dictionary[char] = 1
        }
    }
    return dictionary;
}

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length === 1) {
        return 0;
    }
    const dictionary = constructDictionary(s);
    let char;
    for (let i = 0; i < s.length; i++) {
        char = s[i];
        if (dictionary[char] > 1) {
            return i;
        }
    }
    return -1
};


/**
 * Results:
 * Runtime: 86 - 100 ms (65% - 30%)
 * Memory: 53.5 MB (17%)
 */
