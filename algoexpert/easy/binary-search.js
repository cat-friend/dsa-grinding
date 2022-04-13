// binary search - look at middle -- if target > array[mid], splice from mid -> end
// dont need to do recursion if you keep track of left and right

function binarySearch(array, target) {
    return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
    while (left <= right) {
        const midpoint = Math.floor((left + right) / 2);
        const eleMatch = array[midpoint];
        if (eleMatch === target) {
            return midpoint;
        }
        if (eleMatch >  target) {
            right = midpoint - 1
        }
        else left = midpoint + 1
    }
    return -1;

}

// Do not edit the line below.
exports.binarySearch = binarySearch;
