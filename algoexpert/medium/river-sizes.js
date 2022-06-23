function riverSizes(matrix) {
    // APPROACH:
    // depth first search -
    // need a set to keep track of nodes visited
    // when the queue is empty, push the river size to the river length array
    // IS THERE A WAY TO DO IT WITHOUT TWO NESTED `for` LOOPS?
    const sizes = [];
    const visitedNodes = new Set();

    // first need to find a hit - iterate through array until you find a hit
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // when you find a hit, check if it's in the visistedNodes set
            // if yes, continue
            if (matrix[i][j] === 1 && !visitedNodes.has(`${i}, ${j}`)) {
                // if not, add it to the set
                visitedNodes.add(`${i}, ${j}`)
                // send the hit to the riverLength function
                const riverLength = findRiverLength(matrix, [i, j], visitedNodes);
                if (riverLength) sizes.push(riverLength);
            }
        }
    }
    return sizes
}

// pushes coordinates to riverLengthArray
// has a queue of adjacent nodes
// keeps looking for adjacent nodes of adjacent nodes until queue is empty
// --> need a `while` loop for the queue
// --> check NWES of the initial hit for adjacent hits
// if adjacent node is 1 and is not in the set, push to adjacent node queue and add to riverNodes array
// return riverNodes.length;

// riverLength function - takes in matrix, coordinates, set
function findRiverLength(matrix, coordinates, set) {
    const riverNodes = [coordinates];
    const adjacentNodes = [coordinates];
    // find north
    // if it's at the top (i = 0), can't find north, otherwise, [i - 1][j]
    while (adjacentNodes.length) {
        const [i, j] = adjacentNodes.pop();
        if (i > 0) {
            if (matrix[i - 1][j]) {
                if (!set.has(`${i - 1}, ${j}`)) {
                    riverNodes.push([i - 1, j]);
                    adjacentNodes.push([i - 1, j]);
                    set.add(`${i - 1}, ${j}`)
                }
            }
        }
        // find south
        // if it's at the bottom (i = matrix.length - 1), can't find south, otherwise [i + 1]
        if (i < matrix.length - 1) {
            if (matrix[i + 1][j]) {
                if (!set.has(`${i + 1}, ${j}`)) {
                    riverNodes.push([i + 1, j]);
                    adjacentNodes.push([i + 1, j]);
                    set.add(`${i + 1}, ${j}`)
                }
            }
        }
        // find east
        // if it's at [i][matrix[i].length - 1], can't find east; otherwise [i][j+1]
        if (j < matrix[i].length - 1) {
            if (matrix[i][j + 1]) {
                if (!set.has(`${i}, ${j + 1}`)) {
                    riverNodes.push([i, j + 1]);
                    adjacentNodes.push([i, j + 1]);
                    set.add(`${i}, ${j + 1}`);
                }
            }
        }
        // find west
        // if it's at [i][0] can't find west, otherwise [i][j - 1]
        if (j > 0) {
            if (matrix[i][j - 1]) {
                if (!set.has(`${i}, ${j - 1}`)) {
                    riverNodes.push([i, j - 1]);
                    adjacentNodes.push([i, j - 1]);
                    set.add(`${i}, ${j - 1}`);
                }
            }
        }
    }
    return riverNodes.length
}

console.log(riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
]));

// Do not edit the line below.
exports.riverSizes = riverSizes;
