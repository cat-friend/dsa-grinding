/**
 * Write a function that takes in a list of unique strings and returns a list of smordnilap pairs.
 *
 * A semordnilap pair is defined as set of different strings where the reverse of one word is the same as the forward version of the other. Example: "diaper" and "repair" = semordnilap pair, same as "palindromes" and "semordnilap"
 *
 * Order of returned pairs and the order of the strings within each pair does not matter
 *
 * Example output: [["diaper", "repaid"], ["abc", "cba"]]
 *
 * Constraints:
 * Will I always receive even number of entries?
 * Will I always receive at least one entry?
 *
 * Approach:
 * - make a set from the array
 * - iterate through set.entries
 * - construct reverse of each word
 * - check set if reverse exists
 * - if it exists, push to results
 * - if it doesn't, continue
 */

function semordnilap(words) {
    const results = [];
    const wordsSet = new Set(words);

    for (const word of words) {
        const reverse = word.split("").reverse().join("");
        if (word == reverse) continue
        if (wordsSet.has(reverse)) {
            results.push([reverse, word]);
            wordsSet.delete(reverse);
            wordsSet.delete(word);
        }
    }
    return results;
}

const example1 = ["diaper", "repaid", "semornilap", "palindromes", "aaa", "aab", "baa"];

console.log("semordnilap example1", semordnilap(example1));

/**
 * Key points:
 * Use Set so you can find the reverse in O(1) AND to remove duplicates AND so you can delete
 * If word is a palindrome, it's not a semordnilap
 */
