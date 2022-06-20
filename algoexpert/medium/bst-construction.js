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
            if (currNode.value < this.value) {
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
        find matching node
        once matching node is found,
            removedNode
            prevNode.left or right = removedNode.right
            then drill all the way to the deepest removedNode.right.left and then removedNode.right.left.left[...].left =  removedNode.left
        set the pointer to the matching node to null
        traverse the matching node and add all items to a queue/stack/whatever maybe some
            while (currNode.left || currNode.right) {
                if (currNode.left) stack.push(currNode.left)
                if (currNode.right) stack.push(currNode.right) }
        then insert all of those items
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
            if (currNode.value === value) {

            }
        }

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
