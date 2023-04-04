// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return bst(nums, target)
};

const bst = (nums, target, index = 0) => {
    if (!nums.length) { return -1 }
    if (nums.length === 1) {
        if (nums[0] === target) {
            return index;
        }
        else {
            return -1
        };
    };
    // look at middle number
    const midIndex = Math.floor(nums.length / 2);
    if (nums[midIndex] === target) {
        return index + midIndex
    }

    if (nums[midIndex] < target) {
        return bst(nums.splice(midIndex), target, index + midIndex);
    }

    if (nums[midIndex] > target) {
        return bst(nums.splice(0, midIndex), target, index);
    }
}


// results:
// runtime - beats 72.39%
// memory - beats:  27.45%
