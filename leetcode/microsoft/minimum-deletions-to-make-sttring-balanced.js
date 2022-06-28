/*
You are given a string s consisting only of characters 'a' and 'b'​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.

APPROACH:
go from left to right
prefix = 0;
if letter = a and prefix = 0 continue
if letter = b , prefix++
if letter = a and prefix > 0, deletions +1, prefix -1
return deletions
*/


/**
 * @param {string} s
 * @return {number}
 */
 var minimumDeletions = function(s) {
    let deletions = 0;
    let prefix = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            if (prefix > 0) {
                prefix--
                deletions++
            }
            else continue
        }
        if (s[i] === 'b') {
            prefix++
        }
    }
    return deletions;
};

/*
why does this work?
prefix is a way of keeping track of how many a's and b's came before each index
since the string is supposed to be "balanced", should give values of +1 and -1 to b and a, respectively
then if a 'b' has come before an 'a', can subtract from prefix and add to deletion

this question isn't about 'a's and 'b's but about data structures to keep track of frequencies of one value vs another value, and those values oppose each other
*/
