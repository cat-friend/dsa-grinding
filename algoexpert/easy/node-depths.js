// since looking at depths, do depth first traversal
// since need to keep track of node depth, probably use recursion
// --> need helper function:  takes in node, depthSum (array??)
// return reduced array;
function nodeDepths(root) {
    const depthSumArray = [];
    calcNodeDepth(root, 0, depthSumArray)
    return depthSumArray.reduce((prev, curr) => prev + curr, 0);
}

function calcNodeDepth(node, nodeDepth, depthSumArray) {
    if (!node) return
    depthSumArray.push(nodeDepth);
    calcNodeDepth(node.left, nodeDepth +1, depthSumArray);
    calcNodeDepth(node.right, nodeDepth +1, depthSumArray);
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
