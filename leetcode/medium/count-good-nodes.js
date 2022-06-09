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
 * @return {number}
 */
 var goodNodes = function(root) {
     // dft --> use a stack
     // need to keep track of max number during traversal
     // root node is always good
     // going to push and pop the end, evaluate against the max,
     // need to keep track of number of good nodes
     let goodCount = 0;
     let max = root.val;
     const stack = [];
     stack.push(root)
     while (stack.length) {
         const currNode = stack.pop();
         if (currNode.val >= max) {
             goodCount++;
             max = currNode.val;
         }
        if (currNode.left) stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
     }
     return goodCount;
};
