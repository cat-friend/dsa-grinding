/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 */

/**
 * Approach:
 *  * DFS - stack
 *  * keep track of currSum, currValue
 *  * maybe recursion?
 *  * maybe helper function
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, target) {
    sums = [];
    calculateBranchSums(root, 0, sums);
    return target === sums.reduce((prevVal, currVal) => prevVal + currVal, 0);
}

function calculateBranchSums(node, runningSum, sumsArray) {
    if (!node) return;
    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sumsArray.push(newRunningSum);
        return;
    }
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
}

/**
 * Results:
 * Runtime: 57 ms (78%)
 * Memory: 46.60 mb (7%)
 */

