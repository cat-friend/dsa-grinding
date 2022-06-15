/**
 * @param {number} n
 * @return {number[]}
 */

/*

Given an integer n, return any array containing n unique integers such that they add up to 0.

approach:
make a new array with length `n`
fill it with 0's
left pointer and right pointer
left pointer = math.floor(n/2);
right pointer = n % 2 ? leftpointer + 2 : leftpointer + 1;
*/
var sumZero = function (n) {
    const result = new Array(n).fill(0);
    if (n === 1) return result;
    let leftPointer = Math.floor(n / 2) - 1;
    let rightPointer = n % 2 ? leftPointer + 2 : leftPointer + 1;
    if (n % 2) {
        while (leftPointer >= 0 && rightPointer < result.length) {
            result[leftPointer] = result[leftPointer + 1] - 1;
            result[rightPointer] = result[rightPointer - 1] + 1;
            leftPointer--;
            rightPointer++;
        }
    }
    else {
        result[leftPointer] = -1;
        result[rightPointer] = 1;
        leftPointer--;
        rightPointer++;
        while (leftPointer >= 0 && rightPointer < result.length) {
            result[leftPointer] = result[leftPointer + 1] - 1;
            result[rightPointer] = result[rightPointer - 1] + 1;
            leftPointer--;
            rightPointer++;
        }
    }
    return result;
};

console.log(sumZero(4));
