/**
 * Q1:
 * Given an array with integers in it, return true if at least 1+ nums appear twice in same array, if not, return false
 * possible to receive empty array - return false
 * range of lengths of arrays: 0 - thousands
 * ONLY integers
 *
 * sample test cases:
 * Example 1
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3
 * Input: nums = []
 * output: false
 *
 * Example 4
 * Input: nums = [1, 1, 1, 1, 1]
 * Output:  true
 **/

function moreThanOne(nums) { // think about short circuits!
    // evaluate for empty array first - maybe
    // make a new set with the incoming nums
    const numsSet = new Set(...nums);
    // compare size of set to length of array
    return numsSet.size !== nums.length
    }

    /**
     * Q2:
     * Given 2 binary trees. Write a function that checks to see if the binary trees are exactly the same. Same values at same place.
     *
     * /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     *
     * Will never have an empty tree -- will always at least have the root
     * Range of heights - 1 - infinity
     * Trees can be one-sided
     * If tree are mirrors - return false
     *
     * DFS
     *
     *     A
     *   /   \
     * B      C
     *         \
     *          D
    */
   function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
   }

   function determineTreesEqual(treeA, treeB) {
     // DFS - stack FILO
     // push and pop
     const stackA = [treeA];
     const stackB = [treeB];
     let currNodeA;
     let currNodeB;
     // start with root of each tree in the respective stacks
     while (stackA.length && stackB.length) {
       currNodeA = stackA.pop();
       currNodeB = stackB.pop();
       // compare each tree's node's value - if true continue, if false return
       if (currNodeA.val !== currNodeB.val) {
         return false;
       }

       if (currNodeA.left && currNodeB.left || !currNodeA.left && !currNodeB.left) {
         if (currNodeA.left.val === currNodeB.left.val) {
           stackA.push(currNodeA.left);
           stackB.push(currNodeB.left);
         }
       }
       else return false;

       if (currNodeA.right && currNodeB.right || !currNodeA.right && !currNodeB.right) {
         if (currNodeA.right.val === currNodeB.right.val) {
           stackA.push(currNodeA.right);
           stackB.push(currNodeB.right);
         }
       }
         else return false;
     }
     if (stackA.length || stackB.length) {
       return false;
     } else {
       return true;
     }
   }


   /**
    * Q3:
    * Given 2D array with start and end time. Function - if time overlaps,
    *
    * If arrayOfIntervals === [], return [];
    * Only receive Array<Array<numbers>> - COULD BE UNSORTED
    * Range of lengths:  0 - 2^63
    *
    * Example:
    * Input : intervals = [ [1,3],[2,6],[8,10],[15,18] ]
    * Output: [[1,6],[8,10],[15,18]]
    *
    * Example:
    * Input:  []
    * Output: [];
    *
    * Example:
    * Input: intervals = [[1, 2], [3, 4], [5, 6]];
    * Output: [[1, 2], [3, 4], [5, 6]];
    **/

   function merginngIntervals(arrayOfIntervals) {
     // sort arrayOfIntervals in ascending
     if (arrayOfIntervals.length === 0) {
       return [];
     }
     arrayOfIntervals.sort((a, b) => {
       if (a[0] === b[0]) {
       return a[1] - b[1];
         } else {
         return a[0] - b[0];
       }
     })
       const mergedIntervals = [arrayOfIntervals[0]];
       // iterate through array
     for (const interval of arrayOfIntervals) {
       // compare most recent entry in mergedIntervals: latest = (mergedIntervals[mergedIntervals.length - 1]) with currEntry = arrayOfIntervals[i]
       const latestMerged = mergedIntervals[mergedIntervals.length - 1]
       if (interval[0]] >= latestMerged[0] && interval[0] <= latestMerged[1]) {
         latestMerged[1] = Math.max(latestMerged[1], interval[1]);
       } else {
         mergedIntervals.push(interval);
       }
     }
       return mergedIntervals;
   }
