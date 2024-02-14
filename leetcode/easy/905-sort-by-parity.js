/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
 * Return any array that satisfies this condition.
 * Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
 */
// first try
var sortArrayByParity = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] % 2) {
            const num = nums.splice(i, 1)
            nums.push(...num);
        }
    }
    return nums;
};


const nums = [3, 1, 2, 4]

const nums2 = [0]


console.log(sortArrayByParity(nums2))

/**
 * Results:
 * Runtime: 76 ms (15%)
 * Memory: 44.13 mb (83%)
 */
