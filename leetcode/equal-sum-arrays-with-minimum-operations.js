/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var minOperations = function(nums1, nums2) {
    let sum1 = 0;
    for (let num of nums1) {
        sum1 += num;
    }
    let sum2 = 0;
    for (let num of nums2) {
        sum2 += num;
    }

};

// find the difference between the totals
// want to turn the difference between the totals to be 0
// want to do it in a greedy way

// bring the biggest number in the array down and the smallest number down - this will give the biggest jump
// need to sort
// to bring num up, difference is 6 - num since 6 is maximum
// to bring num down, difference is num - 1 since 1 is minimum


// hint:  we want to either derease the sum of the array with a larger sum or increase the array's sum with the smaller sum

// hint:  you can maintain the largest increase or decrease you can make in a binary search tree and each time get the maximum one
