/**
 * Notes:
 * List of words, determine longest chain where each word evolves into the next without reshuffling the order of the letters
 *
 * Make a cache -- like most dp problems, want to save and refer to previous results instead of starting over from scratch
 *
 * How to know this is dp problem:
 * - Array of things
 * - referring to results of other elements in array - typically language like inserting or removing characters from a string
 */

function longestStrChain(words) {
    words.sort((a, b) => a.length - b.length);
    const dp = {};
    let maxChain = 0;

    for (const word of words) { // fart
        dp[word] = 1;
        for (let i = 0; i < word.length; i++) { // i = 2
            const prev_word = word.slice(0, i) + word.slice(i + 1); // fa + t
            if (dp[prev_word]) {
                dp[word] = Math.max(dp[word], dp[prev_word] + 1)
            }
        }
        maxChain = Math.max(maxChain, dp[word]);
    }
    return maxChain
}

/**
 * Results:
 * Runtime: 162 ms (45%)
 * Memory: 63.42 mb (20%)
 */
