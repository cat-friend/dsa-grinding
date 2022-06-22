// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
// https://www.algoexpert.io/questions/bst-construction
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.set = new Set([value]);
    }

    newNode(value) {
        const newNode = {
            value,
            left: null,
            right: null
        }
        return newNode;
    }
    insert(value) {
        /* APPROACH
        first make a new node, const = newNode(value)
        DFT
        make a stack
        while (stack.length) {
            currNode = stack.pop();
            if value < this.value look left and if currNode.left, stack.push(currNode.left);
            else currNode.left = newNode;
            if value >= this.value look right and if currNode.right, stack.push(currNode.right);
            else currNode.right = newNode;
            }
        this.set.add(value);
        return this
        */
        const newNode = this.newNode(value);
        const stack = [];
        stack.push(this);
        while (stack.length) {
            const currNode = stack.pop();
            if (currNode.value > value) {
                if (currNode.left) stack.push(currNode.left);
                else currNode.left = newNode;
            }
            else {
                if (currNode.right) stack.push(currNode.right);
                else currNode.right = newNode;
            }
        }
        this.set.add(value);
        return this;
    }

    contains(value) {
        // Write your code here.
        /* APPROACH
        can make this in O(1) time by making a set as a property
        return this.set.contains(value)
        */
        return this.set.has(value);
    }

    remove(value) {
        /*
        DFT
        find matching node
        once matching node is found,
            then drill all the way to the deepest removedNode.right.left and then removedNode.right.left.left[...].left.value =  currNode.value
            prevInOrderSuccessor.left = null;
        then when the queue/stack is empty, return this
        removed value from this.set
        */
        // if single node BST, don't remove anything
        if (!this.left && !this.right) return this;
        const stack = [];
        let currNode;
        let prevNode;
        stack.push(this);
        while (stack.length) {
            currNode = stack.pop();
            if (currNode.value < value) {
                stack.push(currNode.right);
            }
            if (currNode.value > value) {
                stack.push(currNode.left);
            }
            else {
                // 1. target node has no children
                if (!currNode.left && !currNode.right) {
                    // then the node direction that points to this (prevNode.left or prevNode.right) should point to null
                    if (prevNode.right.value === value) prevNode.right = null;
                    if (prevNode.left.value === value) prevNode.left = null;
                }
                // 2. target node has left child only
                if (currNode.left && !currNode.right) {
                    // prevNode.left = prevNode.left.left
                    prevNode.left = currNode.left
                }
                // 3. targetNode has right child only
                if (!currNode.left && currNode.right) {
                    // prevNode.right = prevNode.right.right
                    if (prevNode) prevNode.right = currNode.right;
                    else {
                        currNode = currNode.right;
                    }

                }
                // 4. target node has 2 children
                if (currNode.left && currNode.right) {
                    // if there's no currNode.right.left, then currNode.value = currNode.right and if currNode.right.right then currNode.right = currNode.right.right
                    if (!currNode.right.left) {
                        currNode.value = currNode.right.value;
                        currNode.right = currNode.right.right ? currNode.right.right : null;
                    }
                    // find the right branches' left-most node
                    else {
                        prevNode = currNode.right;
                        let newValNode;
                        const dftStack = [];
                        dftStack.push(prevNode.left);
                        while (dftStack.length) {
                            prevNode = newValNode;
                            newValNode = dftStack.pop();
                            if (newValNode.left) dftStack.push(newValNode.left)
                            console.log("prevNode", prevNode)
                        }
                        currNode.value = newValNode.value;
                        prevNode.left = null;
                    }
                }
                this.set.delete(value);
                return this;
            }
            prevNode = currNode;
        }
        return this;
    }
}

// const TestBST = new BST(10);
// const insert = [5, 15, 2, 5, 13, 22, 1, 14, 12]
// for (const num of insert) {
//     TestBST.insert(num);
// }
// console.log("TestBST after inserting", TestBST)
// TestBST.remove(10);
// console.log("TestBST after remove", TestBST)
// TestBST.contains(15);

// Do not edit the line below.
exports.BST = BST;
