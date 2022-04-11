// since it's a graph, probably need a Set to keep track of where I've been;
// ! NOTE ! this.children is an ARRAY since it's a GRAPH problem
// dfs = stack -> pop & push
// try recursion?????
// since the graph is ACYCLICAL - don't need Set to keep track of visited nodes

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
      array.push(this.name);
      for (const child of this.children) {
        child.depthFirstSearch(array);
      }
      return array;
    }
  }

  // Do not edit the line below.
  exports.Node = Node;
