/**
 * @param {number[]} nums
 * @return {number}
 */

/*

There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/

// easy conditions:
// if any of the values are 0, whole thing is zero
// odd neg -> neg
// even neg -> pos
var arraySign = function (nums) {
    let negCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return 0;
        if (nums[i] < 0) negCount++
    }
    if (negCount % 2) return -1
    else return 1;
};
