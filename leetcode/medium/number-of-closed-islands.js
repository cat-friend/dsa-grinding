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
    const visitedNodes = new Set();
    const stack = [];
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 0 && !visitedNodes.has(`[${y}, ${x}]`)) {
                let isClosedIsland = true;
                stack.push([y, x]);
                while (stack.length) {
                    const currNode = stack.pop();
                    const [yCoord, xCoord] = currNode;
                    visitedNodes.add(`[${yCoord}, ${xCoord}]`);
                    if (yCoord === 0) {
                        isClosedIsland = false;
                    } else {
                        if (grid[yCoord - 1][xCoord] === 0 && !visitedNodes.has(`[${yCoord - 1}, ${xCoord}]`)) {
                            stack.push([yCoord - 1, xCoord]);
                        }
                    }
                    if (yCoord === grid.length - 1) {
                        isClosedIsland = false;
                    } else {
                        if (grid[yCoord + 1][xCoord] === 0 && !visitedNodes.has(`[${yCoord + 1}, ${xCoord}]`)) {
                            stack.push([yCoord + 1, xCoord]);
                        }
                    }
                    if (xCoord === 0) {
                        isClosedIsland = false;
                    } else {
                        if (grid[yCoord][xCoord - 1] === 0 && !visitedNodes.has(`[${yCoord}, ${xCoord - 1}]`)) {
                            stack.push([yCoord, xCoord - 1]);
                        }
                    }
                    if (xCoord === grid[yCoord].length - 1) {
                        isClosedIsland = false;
                    } else {
                        if (grid[yCoord][xCoord + 1] === 0 && !visitedNodes.has(`[${yCoord }, ${xCoord + 1}]`)) {
                            stack.push([yCoord, xCoord + 1]);
                        }
                    }
                }
                if (isClosedIsland) {
                    islandCounter++
                }
            }
        }
    }
    return islandCounter;
};

// results:
// runtime: 95 ms, beats 19%
// mem: 49.9 mb, beats 12%
