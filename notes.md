# Heaps
Binary heap - data structure that is a binary tree but has two additional properties

1. completeness - all of its levels must be filled up completely except the last level
    1. if last level is partially filled, must be filled from left to right
2. heap property - distinguish between minHeap and maxHeap
    1. minHeap - every node's value must be smaller than or equal to its direct children's nodes' value
        * easy to do in sorted array - it's literally already constructed
        * Root node is the SMALLEST value in the heap
    2. maxHeap
        * root node is the LARGEST  value in the heap


heap is not sorted!

easy to find parent nodes in heap in array
1. start at index 0
2. to find the two children nodes
    1. first child: take the index, `i`, of the node * 2 + 1; -->
    2. second child: take the index, `i`, of the node * 2 + 2; -->  2 * `i`
    3. to find parent, Math.floor((`i` -1) /2)

## Construction
Core methods
1. build heap
    * takes in an array and builds a heap out of it, can do it in place :0
    * two ways
        1. sift down method
            * given array, sift down on every parent node in heap --> effectively positioning every parent node correctly
    * runs in O(n) time
        * sift down isn't equal for every node that you call; ex: if you call it on a leaf node, it's not going to be sifted since it's at the very bottom
        * the higher in the heap you are, the more times you call sift down

2. insert
    * when inserting, need to satisfy COMPLETENESS and HEAP PROPERTY (min or max)
    * when inserting a value, then need to sift it up with its parent nodes until value is in its correct position
3. remove
    * main removal function - remove the root node
        * swap the root node with the final value in the heap
        * then pop off the final value
        * now heap doesn't satisfy min/max heap property
        * call sift down - take the value and sift it down into the heap until it's in its correct position
        * need to compare to its parent and both of its children
        * swap with its smallest child

## Swapping in place
```js
[heap[j], heap[i]] = [heap[i], heap[j]]
```
