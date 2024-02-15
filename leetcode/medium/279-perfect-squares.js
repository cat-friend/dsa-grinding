/**
Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.



Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.


Constraints:

1 <= n <= 104
 */

/**
 * Notes:
 * Dynamic programming
 * Need a cache
 *
 * Can't use greedy - num of per squares summed in 12 is 4, but solution is 3
 *
 * What's the subproblem?
 * Example: 12
 * Starting points: 1, 4, 9
 * 1 - n = 11
 * 4 - n - 8
 * 9 - n = 3
 *
 * start bottom up
 * find min perfect squares at n = 1, 2, ...
 * Time complexity - O(n * sqrt(n)), Space complexity - sqrt(n)
 */


const numSquares = (n) => {
    const cache = new Array(n + 1).fill(Infinity);
    cache[0] = 0
    for 
}

const test = {
    result: 4,

}
