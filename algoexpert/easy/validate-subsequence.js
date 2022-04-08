// Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers

// Sample Input:
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// Sample Output
// true

function isValidSubsequence(array, sequence) {
    if (sequence.length > array.length) {
        return false;
    }
    let indexInRefArray = 0;
    while (sequence.length) {
        let currSeqNum = sequence.shift();
        indexInRefArray = array.indexOf(currSeqNum, indexInRefArray);
        if (indexInRefArray === -1) {
            return false;
        }
        indexInRefArray++
    }
    return true;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]));

// need to pass when there are dupe numbers in the sequence
