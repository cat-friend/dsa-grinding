/*
You are given a string s consisting only of characters 'a' and 'b'​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.

APPROACH:
try pre-processing
start in the middle-
go out one on the left and right -->
see an a on the left, b on the right --> cool
see an a on the left and an a on the right --> cool
see a b on the left -- uh oh! need to delete
see a b on the right

look at index of first a and index of first b
1) if a > b, need to delete
count how many a's after index of first b
count how many


greedy algorithm:
index of a, index of b
if index of b < index of a --> deletions += index b - index a

}
*/


/**
 * @param {string} s
 * @return {number}
 */
 var minimumDeletions = function(s, deletions = 0) {

};
