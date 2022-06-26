/*
Given two arrays of integers with equal lengths, return the maximum value of:

|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

where the maximum is taken over all 0 <= i, j < arr1.length.



Example 1:

Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
Output: 13
Example 2:

Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
Output: 20


Constraints:

2 <= arr1.length == arr2.length <= 40000
-10^6 <= arr1[i], arr2[i] <= 10^6

APPROACH:
GIVEN:  two arrays
GOAL: return maximum value of |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
[-420, -400
|arr1[i] - arr1[j]| is maximized when:
1. arr1[i] is maximum value and arr1[j] is minimum value when arr1[i] is positive
2. arr1[i] is minimum value and arr1[j] is penultimate minimum value when arr1[i] and arr1[j] are negative


|arr2[i] - arr2[j]| is maximized when:
1. arr2[i] is maximum value and arr2[j] is minimum value when arr2[i] is positive
2. arr2[i] is minimum value and arr2[j] is penultimate minimum value when arr2[i] and arr2[j] are negative

| i - j | is maximized when
i or j are equal to arr.length - 1
the other variable is equal to 0
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    console.log('hello')
    return maxComputer(arr1, arr2);
};

function maxComputer(arr1, arr2) {
    // 2 scenarios generate the maximum:
    // i and j are at extremes and when i and j are next to each other
    let i = 0;
    let j = arr1.length - 1;
    let max = calculator(arr1, arr2, 0, arr1.length - 1);
    if (calculator(arr1, arr2, arr1.length - 1, 0) > max) max = calculator(arr1, arr2, arr1.length - 1, 0);
    if (calculator(arr1, arr2, 1, 0) > max) max = calculator(arr1, arr2, 1, 0);
    if (calculator(arr1, arr2, 0, 1) > max) max = calculator(arr1, arr2, 0, 1)
    console.log("max", max)
    return max;
}

function calculator(arr1, arr2, i, j) {
    return Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j);
}

console.log(maxAbsValExpr([1, 2, 3, 4], [-1, 4, 5, 6])
)
