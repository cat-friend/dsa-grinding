/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prevNum;
    let currNum;
    let numSpliced = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        prevNum = nums[i + 1];
        currNum = nums[i];
        if (currNum === prevNum) {
            nums.push(...nums.splice(i, 1));
            numSpliced++;
        }
    }
    return nums.length - numSpliced;
};

/**
 * Results:
 * Runtime: 107 ms (24%)
 * Memory: 44.55 mb (57%)
 */
