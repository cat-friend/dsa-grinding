/**
 * Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.
 *
 * Return the minimum number of substrings in such a partition.
 *
 * Note that each character should belong to exactly one substring in a partition.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "abacaba"
 * Output: 4
 * Explanation:
 * Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
 * It can be shown that 4 is the minimum number of substrings needed.
 * Example 2:
 *
 * Input: s = "ssssss"
 * Output: 6
 * Explanation:
 * The only valid partition is ("s","s","s","s","s","s").
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 105
 * s consists of only English lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */

var partitionString = function (s) {
    let stringPartitionsCounter = 0;
    let i = 0;

    // minimum number of strings = make the strings as long as possible

    while (i < s.length) {
        let j = i + 1;
        const currString = new Set(s[i]);
        // iterate through the array, keep adding letters to the substring until you reach a letter that is already included in the string
        while (j < s.length) {
            if (!currString.has(s[j])) {
                currString.add(s[j]);
                j++
                if (j === s.length - 1) {
                    stringPartitionsCounter++;
                    i++
                }
            }
            // once you reach a letter that is already included in the string, start again at the next letter, increment stringPartitionsCounter
            else {
                stringPartitionsCounter++;

                break;
            }
        }
        i = j;
    }
    return stringPartitionsCounter;
};

console.log(partitionString("abacaba"))
