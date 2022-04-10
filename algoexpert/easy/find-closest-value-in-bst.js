// return closest value to that target value contained in the BST
// breadth-first search - keep track of abs value of difference; if abs value of difference < current diff, then curr num is the closest number
// proceed until all nodes touched
// bfs is queue -> use push and shift

function findClosestValueInBst(tree, target) {
    let currentNode = tree;
    const queue = [currentNode];
    let absValDiff = Math.abs(target - currentNode.value);
    let closestValInBST = currentNode.value;
    while (queue.length) {
        currentNode = queue.shift();
        console.log("closestValInBST", closestValInBST);
        console.log("curr value", currentNode.value);
        console.log("absValDiff", absValDiff);
        console.log("Math.abs conditionmal", Math.abs(target - currentNode.value));
        if (Math.abs(target - currentNode.value) < absValDiff) {
            closestValInBST = currentNode.value;
            absValDiff = Math.abs(target - currentNode.value)
        }
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
    return closestValInBST
}

// need to update absValDiff when finding an absValDiff that's less than current

// try doing it  recursively - iteratively is O(n)
