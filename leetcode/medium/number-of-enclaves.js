/**
 * You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
 *
 * A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
 *
 * Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.
 *
 * Example 1:
 *
 * Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
 * Output: 3
 * Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
 *
 * Example 2:
 *
 * Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
 * Output: 0
 * Explanation: All 1s are either on the boundary or can reach the boundary.
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 500
 * grid[i][j] is either 0 or 1.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

// sea = 0
// land = 1
// iterate through grid to look for a 1
// when you find a 1 && !visitedNodes.has(node), DFS and add nodes to visited nodes; if any of the nodes  (y === 0 || grid.length - 1) || (x === 0 || grid[0].length - 1) --> not an enclave
// add nodes to a path
// once all nodes of landmass found, numEnclaves += landmass.length and reset landmass
var numEnclaves = function (grid) {
    const visitedNodes = new Set();
    const stack = [];
    let numEnclaves = 0;
    for (let y = 1; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 1 && !visitedNodes.has(`[${y}, ${x}]`)) {
                let isEnclave = true;
                let landMass = [];
                stack.push([y, x]);
                landMass.push([y, x]);
                while (stack.length) {
                    const currNode = stack.pop();
                    const [yCoord, xCoord] = currNode;
                    visitedNodes.add(`[${yCoord}, ${xCoord}]`);
                    if (yCoord === 0) {
                        isEnclave = false;
                    } else {
                        if (grid[yCoord - 1][xCoord] === 1 && !visitedNodes.has(`[${yCoord - 1}, ${xCoord}]`)) {
                            stack.push([yCoord - 1, xCoord]);
                            landMass.push([yCoord - 1, xCoord]);
                        }
                    }
                    if (yCoord === grid.length - 1) {
                        isEnclave = false;
                    } else {
                        if (grid[yCoord + 1][xCoord] === 1 && !visitedNodes.has(`[${yCoord + 1}, ${xCoord}]`)) {
                            stack.push([yCoord + 1, xCoord]);
                            landMass.push([yCoord + 1, xCoord]);
                        }
                    }
                    if (xCoord === 0) {
                        isEnclave = false;
                    } else {
                        if (grid[yCoord][xCoord - 1] === 1 && !visitedNodes.has(`[${yCoord}, ${xCoord - 1}]`)) {
                            stack.push([yCoord, xCoord - 1]);
                            landMass.push([yCoord, xCoord - 1]);
                        }
                    }
                    if (xCoord === grid[yCoord].length - 1) {
                        isEnclave = false;
                    } else {
                        if (grid[yCoord][xCoord + 1] === 1 && !visitedNodes.has(`[${yCoord}, ${xCoord + 1}]`)) {
                            stack.push([yCoord, xCoord + 1]);
                            landMass.push([yCoord, xCoord + 1]);
                        }
                    }
                }
                if (isEnclave) {
                    numEnclaves += landMass.length;
                } else {
                    landMass = [];
                }
            }
        }
    }
    return numEnclaves
}

console.log(numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]))
