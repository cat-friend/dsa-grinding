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
// keep pushing in letters while the last 2 letters aren't that letter and countLetter < a;
// if last item in stack is not letter with count of 2, reset count to 0, push the letter, then add 1 to count, subtract from total count

// this is a greedy algorithm problem -- find the letter with the most possible occurrences AT THE START OF EACH LOOP
// mostLetter = goes first
// push most letter into array
// once second-most common letter is 0, we're done with the algorithm


var longestDiverseString = function (a, b, c) {
    const totalLength = a + b + c;
    const happyString = [];
    const chars = [
        [a, 'a'],
        [b, 'b'],
        [c, 'c']
    ]
    while (happyString.length < totalLength) {
        chars.sort((a, b) => b[0] - a[0]);
        console.log("chars", chars);

        // figure out which character to push
        // if character at last item in stack and character at penultimate item in st ack are the same AND
        // if character at last item is the nsame as GREEDIEST CHARACTER
        // --> determines if the last two are the greediest character
        // YES:  if last 2 in stack are greediest character, then character to push is the character in the second position
        // NO:  if last 2 in the stack are NOT the greediest character, then the character to push is the greediest
        const char = happyString[happyString.length - 1] === happyString[happyString.length - 2] && happyString[happyString.length - 1] === chars[0][1] ?
        chars[1] : chars[0];
        if (char[0] === 0) break;
        happyString.push(char[1]);
        // then deprecate the character that is pushed
        char[0]--
            // this deprecates the value in the chars array because they're pointing to the same things in memory -- the incoming a, b, c param
        console.log("hppystringarray", happyString)
        console.log("chars after push", chars)
    }
    return happyString.join("")
};

console.log(longestDiverseString(1, 1, 7))
