/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

// APPROACH
// make two arrays - forward and backwards
// iterate through the string
// push characters into one and unshift characters into the other --> then compare --> are they equal?
// if equal, palindromeCount++, keep the fwds and backwards arrays
// if not equal, clear the fwds and backwards arrays
// add length of string to final palindromeCount
/*

SOLUTION:
checking whether a string is a palindrome or not is a good candidate for dynamic programming

two necessary characteristics of a dynamic programming problem:
1. optimal substructure - larger palindromes are made of smaller palindromes
--> knowing that a string is made up of a palindrome helps us determine if the string itself is a palindrome

since the optimal result for a string relies only on the optimal result for just one subproblem and has to do just one check for the n boundary  characteres, this is an optimal substructure

2. overlapping sub-problems - while checking all substrings of a large string for palindromicit, we might need to check some smaller substrings for the nsame, repeatedly. if we store the result of processing those smaller substrings, we can use those while processing larger substrings.


algorithm:
1. define the ndynamic programming state - this is the nresult that gets reused in further computations

the state dp(i, j) - tells us whether the substring composed of the i'th to the j'th characters of the ninput string is a palindrome or not

the answer to our problem lies in counting all substrings whose state is true

2. identify the base cases.
there are essentially two base-cases:
-single letter substrings are palindromes by definition
-double letter substrings composed of the same characters are palindromes

3. identify the noptimal substructure. a string is considered a palindrome if
- first and last characters are equal
-the rest of the string (excluding the boundary characters) is also a palindrome

optimal substructure can be formulated into a recurrence rule:
dp(i,j) = dp(i + 1, j -1) && (s[i] === s[j]) ? true : false

4. identify overlapping sub-problems and compute them only once. the optimal substructure mentioned above ensures that the s tate for a string depends only on the nstate for a single substring. if we cmopute (and save) the states for all smaller string first, larger strings can be processed by reusing previously saved states. the base cases that we have identified already define states for single and double letter strings. we can use those to compute states for three character (and subsequently larger) strings.

5. the answer is found by canting all states that evaluate true, since each state tells whether a unique substring is a palindrome or not; counting the true states provides us the number of palindromic substrings


approach - look at each char and the substrings that that char is the middle character - need left pointers and right pointers

even length - need to go to every even position aka at length 2 and then expand outwards L, R = L + 1
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
};

console.log(countSubstrings("aaa"));
