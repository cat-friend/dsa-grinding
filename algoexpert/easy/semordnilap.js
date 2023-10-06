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
 * - Sort by length - nlogn
 * - Chunk by length?
 * - Iterate through chunks of strings of same length, check first letter against last letter, if no matches, discard word, repeat
 * If find a match, iterate through first word LTR and second word RTL.
 * - Time complexity: num of words * num of letters * num of matches
 * -
 *
 * Alternate approach:
 * Get char code sum for each word, compare - if any matches, compare those words
 * No sorting
 * Iterating through each letter of each word - n^2
 */

function semordnilap(words) {
    // Write your code here.
    return [];
}
