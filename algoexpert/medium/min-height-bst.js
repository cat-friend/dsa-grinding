// APPROACH
// array is already sorted
// probably recurse
// keep halving the array and insert values at the half

// first find initial midpoint
// construct new BST with that midpoint value
// splice from the midpoint + 1 --> send into insert function
// also splice from 0, midpoint --> send into insert function
// the above two steps are the recursive step -- eliminating one value at a time
// if array is empty, return

// edge cases: array is all one value --> generate a right-branch-only BST

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

function minHeightBst(array) {
    const midpoint = Math.floor(array.length / 2);
    const bst = new BST(array[midpoint]);
    addingToBST(bst, array.slice(0, midpoint));
    addingToBST(bst, array.slice(midpoint + 1));
    return bst;
}

function addingToBST(bst, array) {
    const midpoint = Math.floor(array.length / 2);
    if (!array.length) return;
    bst.insert(array[midpoint]);
    addingToBST(bst, array.slice(0, midpoint));
    addingToBST(bst, array.slice(midpoint + 1));
}
// Do not edit the line below.
exports.minHeightBst = minHeightBst;
