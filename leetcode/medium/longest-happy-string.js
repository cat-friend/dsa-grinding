/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */

/*
A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.
*/

// approach:
// make an array of letters `happyString`
// push letters into the array, when you push it in, subtract from argument
// keep pushing in letters while the last 2 letters aren't that letter
// if last item in stack is not letter with count of 2, reset count to 0, push the letter, then add 1 to count, subtract from total count


var longestDiverseString = function (a, b, c) {
    const happyString = [];
    while (a > 0 || b > 0 || c > 0) {
        while (happyString[happyString.length - 1] != "a" && happyString[happyString.length - 2] != "a" && a > 0) {
            happyString.push("a");
            a--;
        }
        while (happyString[happyString.length - 1] != "b" && happyString[happyString.length - 2] != "b" && b > 0) {
            happyString.push("b");
            b--;
        }
        while (happyString[happyString.length - 1] != "c" && happyString[happyString.length - 2] != "c" && c > 0) {
            happyString.push("c");
            c--;
        }
    }
    return happyString.join("")
};

console.log(longestDiverseString(1, 1, 7))
