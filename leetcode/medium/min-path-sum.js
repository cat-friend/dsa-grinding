/**
 * Given a m x n grid filled with non-negative numbers,
 * find a path from top left to bottom right, which minimizes
 *  the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 */

// two pointers - one at x and one at y
// once you get to the bottom, Math.min prevMin and currentSum

// example:  [[1,3,1],[1,5,1]]
// queue = [1, 3, 5]


const minPathSum = (grid) => {
    // stack = [[x, y, sum], [x + 1, y], [x, y + 1]];
    const queue = [];
    queue.push([0, 0, 0]);
    let currSum = 0;
    const sums = [];

    let currCoordinate;
    // breadth first search - use a stack -> add down and right neighbors to the stack
    // keep looking at neighbors of the next coordinate until we get to [m - 1 , n - 1]
    while (queue.length) {
        currCoordinate = queue.shift();
        const [x, y, sum] = currCoordinate;
        currSum = grid[x][y] + sum;
        if (grid[x + 1] !== undefined && grid[x + 1][y] !== undefined) {
            queue.push([x + 1, y, currSum]);
        }
        if (grid[x] !== undefined && grid[x][y + 1] !== undefined) {
            queue.push([x, y + 1, currSum]);
        }
        // when you get to the bottom right, Math.min(currSum, minSum);
        if (x === grid.length - 1 && y === grid[0].length - 1) {
            sums.push(currSum);
        }
    }
    return Math.min(...sums)
}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
