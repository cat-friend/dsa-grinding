/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxArea = 0;
    let leftHeight;
    let rightHeight;
    let minHeight;
    let width;
    let area;
    while(leftPointer < rightPointer) {
        leftHeight = height[leftPointer];
        rightHeight = height[rightPointer];
        minHeight = Math.min(leftHeight, rightHeight);
        width = rightPointer - leftPointer;
        currArea = minHeight * width;
        maxArea = Math.max(maxArea, currArea);
        leftPointer = leftHeight < rightHeight ? leftPointer + 1 : leftPointer;
        rightPointer = rightHeight < leftHeight ? rightPointer - 1 : rightPointer;
        if (leftHeight === rightHeight) {
            leftPointer++;
            rightPointer--;
        }
    }
    return maxArea;
};

/**
 * Results:
 * runtime: 71 ms, beats 78%
 * memory: 49.5 mb, beats 84.5%
 */
