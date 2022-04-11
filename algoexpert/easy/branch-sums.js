function branchSums(root) {
    // most likely depth-first search, go left then right
    // dfs uses stack - push and pop;
    // keep track of sum - since you need to backtrack but also keep a running sum, best to use recursion
    sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function branchSumsHelper(node, runningSum, sumsArray) {
    if (!node) return;
    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sumsArray.push(newRunningSum);
        return;
    }
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);

}

// time complexity = O(n) where n is the number of nodes -- because you need to traverse each one
// space complexity in the stack = O(logn) - because of the way search trees & recursion works - eliminating half of the nodes in the remaining tree at every recursive call
// worst case - very skewed tree - space = O(n)
// balanced tree -> space = O(n)
// so overall space complexity is O(nlogn)
