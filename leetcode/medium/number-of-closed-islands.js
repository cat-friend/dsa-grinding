/**
 * Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
 *
 * Return the number of closed islands.
 *
 * Example 1:
 *
 * Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
 * Output: 2
 * Explanation:
 * Islands in gray are closed because they are completely surrounded by water (group of 1s).
 *
 * Example 2:
 *
 * Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
 * Output: 1
 *
 * Example 3:
 *
 * Input: grid = [[1,1,1,1,1,1,1],
 *                [1,0,0,0,0,0,1],
 *                [1,0,1,1,1,0,1],
 *                [1,0,1,0,1,0,1],
 *                [1,0,1,1,1,0,1],
 *                [1,0,0,0,0,0,1],
 *                [1,1,1,1,1,1,1]]
 * Output: 2
 *
 * Constraints:
 *
 * 1 <= grid.length, grid[0].length <= 100
 * 0 <= grid[i][j] <=1
 */

/**
 * @param {number[][]} grid
 * 0 = land
 * 1 = water
 * @return {number}
 */
var closedIsland = function (grid) {
    let islandCounter = 0;
    // first traverse the grid to find land
    const visitedNodes = new Set();
    for (let y = 0; y < grid.length; y++) {
        const stack = [];
        let isClosedIsland = true;
        for (let x = 0; x < grid[y].length; x++) {
            if (visitedNodes.has(`[${y}, ${x}]`)) {
                continue;
            }
            else {
                // once you find a node that is land --> use DFS traverse land nodes (traverse more edges with DFS) and evaluate the nodes:
                if (grid[y][x] === 0) {
                    stack.push([y, x]);
                    while (stack.length) {
                        const currNode = stack.pop();
                        const [yCoord, xCoord] = currNode;
                        visitedNodes.add(`[${yCoord}, ${xCoord}]`);
                        // add top = y - 1, bottom = y + 1, x + 0, left = x - 1, right = x + 1 to queue -- only if they haven't been added yet and only if grid[top, bottom, left, right] === 0
                        // if top, bottom, left, right === undefined --> isClosedIsland = false;
                        // top
                        if (yCoord === 0) {
                            isClosedIsland = false;
                        } else {
                            if (grid[yCoord - 1][xCoord] === 0 && !visitedNodes.has(`[${yCoord - 1}, ${xCoord}]`)) {
                                stack.push[yCoord - 1, xCoord];
                            }
                        }
                        // bottom
                        if (yCoord === grid.length - 1) {
                            isClosedIsland = false;
                        } else {
                            if (grid[yCoord + 1][xCoord] === 0 && !visitedNodes.has(`[${yCoord + 1}, ${xCoord}]`)) {
                                stack.push[yCoord - 1, xCoord];
                            }
                        }
                        // left
                        if (xCoord === 0) {
                            isClosedIsland = false;
                        } else {
                            if (grid[yCoord + 1][xCoord] === 0 && !visitedNodes.has(`[${yCoord + 1}, ${xCoord}]`)) {
                                stack.push[yCoord - 1, xCoord];
                            }
                        }
                        // right
                        if (xCoord === grid[yCoord][0].length - 1) {
                            isClosedIsland = false;
                        } else {
                            if (grid[yCoord + 1][xCoord] === 0 && !visitedNodes.has(`[${yCoord + 1}, ${xCoord}]`)) {
                                stack.push[yCoord - 1, xCoord];
                            }
                        }
                    }
                    if (isClosedIsland) {
                        islandCounter++
                    }
                }
            }
        }
    }
    // fully enclosed island - has water all around it
    // each node must be adjacent to either water or land
    // if any side doesn't have water or land (like edge of map), not fully enclosed -> isClosedIsland = false; keep traversing and adding to set so you don't visit the nodes again
    // return islandCounter
    return islandCounter;

};
