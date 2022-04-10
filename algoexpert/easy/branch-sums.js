function branchSums(root) {
    // most likely depth-first search, go left then right
    // dfs uses stack - push and pop;
    // keep track of sum
    const stack = [root];
    let sum = root.value;
    let prevSum = sum;
    const runningSums = [sum];
    const sums = [];
    while (stack.length) {
        let node = stack.pop();
        sum = runningSums[runningSums.length - 1] + node.value;
        runningSums.push(sum);
        if (node.right) stack.push(node.right);
        else if (node.left) stack.push(node.left);
        else if (!node.right && !node.left) {
            sums.push(sum);
            runningSums.pop();
        }
    }
    return sums;
}
