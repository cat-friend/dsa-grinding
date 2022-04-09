// brute force: can square the array and then .sort() but that's not optimal
// for optimal, keep track of smallest and largest absolute values
// since input is sorted, can solve problem in linear time

/**
 * [-4, 1, 2]
 * output should be: [1, 4, 16]
 */

// 1. initialize empty output array
// 2. as we go further left/further right from zero, the squares tend to get larger
// 2b. look at absolute value to see what will generate the larger square
// 3. make two pointers (start and end) - look at abs values of nums at the poles - the largest positive values are at the very ends of array - and compare them: the larger of the two goes at the very end of returned array
// 4. move end over to the left/ move the start over to the right
// 4b. repeat 3.

function sortedSquaredArray(array) {
    const result = new Array(array.length).fill(0);
    let i = array.length - 1;
    let start = 0;
    let end = array.length - 1;
    while (i >= 0) {
        let startNum = array[start];
        let endNum = array[end];
        if (Math.abs(startNum) > Math.abs(endNum)) {
            result[i] = array[start] * array[start];
            i--;
            start++;
        }
        else {
            result[i] = array[end] * array[end];
            i--;
            end--;
        }
    }
    return result;
  }
