// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }

    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    breadthFirstSearch(array) {
      // bfs uses a queue - first in, first out
      let queue = [];
      queue.push(this);
      const children = [];
      while (queue.length) {
        const currNode = queue.shift();
        queue = queue.concat(currNode.children);
        children.push(currNode.name)
      }
      return children;
    }
  }

  // Do not edit the line below.
  exports.Node = Node;

// notes:
// concat returns a new array, does not mutate original array
// keep in mind what you're keying into for the object - children, name
