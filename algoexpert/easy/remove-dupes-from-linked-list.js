// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  // removing dupes -- make a set! if the set already has it, make node.next = node.next.next
  // then proceed to the next node
  // if the set doesn't already have it, currNode = node.next;
  // `while` loop: need to only execute if there's a next one
  function removeDuplicatesFromLinkedList(linkedList) {
    const existingNodes = new Set();
    let currNode = linkedList;
    existingNodes.add(currNode.value);
    let nextNode;
    while (currNode.next) {
        nextNode = currNode.next;
        if (existingNodes.has(nextNode.value)) {
            currNode.next = currNode.next.next;
        }
        else {
            existingNodes.add(nextNode.value);
            currNode = nextNode;
        }
    }
    return linkedList;
  }

  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
