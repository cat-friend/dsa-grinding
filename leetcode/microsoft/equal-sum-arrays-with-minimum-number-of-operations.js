/*
ou are given two arrays of integers nums1 and nums2, possibly of different lengths. The values in the arrays are between 1 and 6, inclusive.

In one operation, you can change any integer's value in any of the arrays to any value between 1 and 6, inclusive.

Return the minimum number of operations required to make the sum of values in nums1 equal to the sum of values in nums2. Return -1​​​​​ if it is not possible to make the sum of the two arrays equal.



Example 1:

Input: nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
Output: 3
Explanation: You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed.
- Change nums2[0] to 6. nums1 = [1,2,3,4,5,6], nums2 = [6,1,2,2,2,2].
- Change nums1[5] to 1. nums1 = [1,2,3,4,5,1], nums2 = [6,1,2,2,2,2].
- Change nums1[2] to 2. nums1 = [1,2,2,4,5,1], nums2 = [6,1,2,2,2,2].
Example 2:

Input: nums1 = [1,1,1,1,1,1,1], nums2 = [6]
Output: -1
Explanation: There is no way to decrease the sum of nums1 or to increase the sum of nums2 to make them equal.
Example 3:

Input: nums1 = [6,6], nums2 = [1]
Output: 3
Explanation: You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed.
- Change nums1[0] to 2. nums1 = [2,6], nums2 = [1].
- Change nums1[1] to 2. nums1 = [2,2], nums2 = [1].
- Change nums2[0] to 4. nums1 = [2,2], nums2 = [4].


Constraints:

1 <= nums1.length, nums2.length <= 105
1 <= nums1[i], nums2[i] <= 6

APPROACH
seems like a greedy algorithm problem, so probably will need to find max values and their indices

first find the sums of each of the arrays
then find the difference between them
method:
    find the lesser sum array:
        find the min value and max it out
        then find the diff between max value (6) and the value it is and push it to a range array
        so rangeArray.push(6 - lesser[i])
    for the great sum array:
        find the max value and min it out
        find the diff between min value (1) and the max value and push it to the range array
        so rangeArray.push(greater[i] - 1)
    then a `for` loop for range array
    need to do diff -= rangearray[i] and permutations++
    if diff <= 0 break;
    return diff <= 0 ? permutations : -1;

PROBABLY NEED TO SORT RANGE ARRAY b - a because the larger values will give the biggest delta in diff when it is -=

*/



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
    let sum1 = 0;
    let sum2 = 0;
    let lesser;
    let greater;
    let difference;
    let permutations = 0;
    const rangeArray = [];
    for (const num of nums1) {
        sum1 += num;
    }
    for (const num of nums2) {
        sum2 += num;
    }

    difference = Math.abs(sum1 - sum2);
    lesser = sum1 < sum2 ? nums1 : nums2;
    greater = sum1 > sum2 ? nums1 : nums2;
    for (let i = 0; i < lesser.length; i++) {
        rangeArray.push(6 - lesser[i]);
    }
    for (let i = 0; i < greater.length; i++) {
        rangeArray.push(greater[i] - 1);
    }

    rangeArray.sort((a, b) => b - a);
    for (const num of rangeArray) {
        if (difference <= 0) break;
        difference -= num;
        permutations++;
    }
    return difference <= 0 ? permutations : -1;
};

console.log(minOperations([1,2,3,4,5,6], [1,1,2,2,2,2]));
