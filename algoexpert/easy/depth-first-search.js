// since it's a graph, probably need a Set to keep track of where I've been;
// if !set.has(node) -> set.add(node), push to array
// ! NOTE ! this.children is an ARRAY since it's a GRAPH problem
// dfs = stack -> pop & push
// try recursion?????

// Do not edit the class below except
// for the depthFirstSearch method.
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

    depthFirstSearch(array) {
      const setOfVisitedNodes = new Set();
      this.depthFirstSearchHelper(this, setOfVisitedNodes, array);
      return array;
    }

    depthFirstSearchHelper(node, setOfVisitedNodes, resultsArray) {
        if (!node) return;
        if (!setOfVisitedNodes.has(node.name)) {
            resultsArray.push(node.name);
            setOfVisitedNodes.add(node.name);
        }
        while (this.children.length) {
            const nextNode = this.children.pop();
            this.depthFirstSearchHelper(nextNode, setOfVisitedNodes, resultsArray
                )
        }
    }
  }

  // Do not edit the line below.
  exports.Node = Node;
