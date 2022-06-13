/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

// make obj; value: [index];
// iterate through nums array;
// at each ele, target - nums = some difference
// then check -- numsObj.hasOwnProperty(some difference) ? results.push(numsObj[some difference].pop() && results.push(numsObj[ele].pop()) && return results

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numObj = numObjGenerator(nums);
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (numObj.hasOwnProperty(diff)) {
            if (diff === nums[i]) {
                if (numObj[diff].length > 1) {
                    return [numObj[diff][0], numObj[diff][1]]
                }
                else continue;
            }
            return [i, numObj[diff][0]]
        }
    }
    return [];
};

function numObjGenerator(nums) {
    const numObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (numObj.hasOwnProperty(nums[i])) numObj[nums[i]].push(i)
        else {
            numObj[nums[i]] = [i]
        }
    }
    return numObj;
}
