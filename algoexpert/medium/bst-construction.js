// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
        if value < this.value look left and look at this.left.value
            if this.left.value < value, newNode.left = currNode.left
            currNode.left = newNode
            return this
        if value >= this.value look right and look at this.right.value
            if this.right.value >= value, newNode.right = currNode.right
            currNode.right = newNode
            return this
            if it's less, then need to look left
        */
        return this;
    }

    contains(value) {
        // Write your code here.
        /* APPROACH
        DFT
        push head into stack
        while loop; conditional - stack.length
        does value === currNode.value? return true
        else {
            if (value < currNode.value && currNode.left) stack.push(currNode.left)
            if (value > currNode.value && currNode.right) stack.push(currNode.right);
        }
        return false;
        */
    }

    remove(value) {
        /*
        find matching node
        once matching node is found, set the pointer to the matching node to null
        bft of the matching node and add all items to a queue/stack/whatever
        then insert all of those items
        then when the queue/stack is empty, return this
        */
        // if single node BST, don't remove anything
        const stack = [];
        let currNode;
        let prevNode;

    }
}

// Do not edit the line below.
exports.BST = BST;

/*
I MADE A MISTAKE AND THOUGHT remove(value) MEANT REMOVING THE HEAD SO THIS IS ALL USELESS BUT I WANT TO KEEP IT BECAUSE IT MIGHT BE USEFUL MAYBE ???
    if (this.value === value) {
    if (this.right.left) {
        stack.push(this.right);
        while (stack.length) {
            currNode = stack.pop();
            if (currNode.left) stack.push(currNode.left);
            prevNode = currNode;
        }
        if (currNode.right) {
            prevNode.left = currNode.right
            currNode.right = null;
        }
        else currNode.left = null;
        this.value = currNode.value;
        return this;
    }
    if (!this.right.left && this.left.right) {
        stack.push(this.left)
        while (stack.length) {
            currNode = stack.pop();
            if (currNode.right) stack.push(currNode.right);
            prevNode = currNode;
        }
        this.value = currNode.value;
        // if result of DFT has a this.left, then need to traverse & insert all nodes connected to the DFT this.left result
        if (currNode.left) {
            stack.push(currNode.left)
            while (stack.length) {
                currNode = stack.pop();
                if (currNode.right) stack.push(currNode.right);
                if (currNode.left) stack.push(currNode.left);
                this.insert(currNode.value)
            }
        }
        return this;
    }
    if (!this.left && !this.right) {
        return this;
    }
    // what if there's no this.right.lefts AND no this.left.rights?
    // the first this.right is the new head
    if (!this.right.left && !this.left.right) {
        this.value = this.right.value;
        this.right = this.right.right;
        return this;
    }
} */
