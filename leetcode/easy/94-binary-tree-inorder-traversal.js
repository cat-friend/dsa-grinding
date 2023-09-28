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
 * @return {number[]}
 */

/**
 * Approach:
 * inorder is dfs: push left, then when no more lefts, pop the last one off, push the curr val, and then curr.right
 */


//      A
//     / \
//    B   D
//   /   / \
//  C   E   F
// expect [C, B, A, E, D, F]

var inorderTraversal = function(root) {
    const results = [];
    const stack = [];
    let currNode = root;
    while (stack.length || currNode) {
        if (currNode) {
            stack.push(currNode)
            currNode = currNode.left;
        } else {
            currNode = stack.pop();
            results.push(currNode.val);
            currNode = currNode.right;
        }
    }
    return results
};

/**
 * Results:
 * 50 ms (64%)
 * Memory: 41.92 mb (63%)
 */
