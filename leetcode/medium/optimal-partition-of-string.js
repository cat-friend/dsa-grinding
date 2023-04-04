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
    let left = 0;
    let right = 1;
    // [a, b, a, c, a , b, a]

    let stringSet = new Set(s[left]);
    while (left < s.length) {
        if (!s[right]) {
            stringPartitionsCounter++;
            left = right;
            break;
        }
        if (!stringSet.has(s[right])) {
            stringSet.add(s[right]);
            right++
        }
        else {
            stringPartitionsCounter++;
            stringSet = new Set(s[right]);
            left = right;
            right++;
        }
    }
    return stringPartitionsCounter
};

console.log(partitionString("ssssss"))

/**
 * results:
 * runtime: 145 ms (beats 29%)
 * memory: 51.1 mb (beats 28%)
 */
