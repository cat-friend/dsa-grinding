function riverSizes(matrix) {
    // APPROACH:
    // depth first search -
    // need a set to keep track of nodes visited
    // first need to find a hit - iterate through array until you find a hit
    // when you find a hit, check NWES for adjacent hits, if there are adjacent hits, check if it's in the set, if it isn't, add it to the queue of hits --> key into subsequent hits and repeat
    // need a `while` loop for the queue
    // when the queue is empty, push the river size to the river length array
    // IS THERE A WAY TO DO IT WITHOUT TWO NESTED `for` LOOPS?
    const sizes = [];
    const visitedNodes = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; i++) {
            if (matrix[i][j]) {
                if (visitedNodes.has(`${i}, ${j}`)) continue;
                else {
                    let adjacentNodes = findAdjacentHits(matrix, [i, j], visitedNodes);
                    while (adjacentNodes.length) {
                        const currNode = adjacentNodes.pop();
                        adjacentNodes = adjacentNodes.concat(adjacentNodes())
                    }
                }
            }
        }
    }
    return sizes
}

function findAdjacentHits(matrix, [i, j], set) {
    // coordinates: [i, j]
    const hits = [];
    // find north
    // if it's at the top (i = 0), can't find north, otherwise, [i - 1][j]
    if (i) {

    }
    // find south
    // if it's at the bottom (i = matrix.length - 1), can't find south, otherwise [i + 1]

    // find east
    // if it's at [i][matrix[i].length - 1], can't find east; otherwise [i][j+1]

    // find west
    // if it's at [i][0] can't find west, otherwise [i][j - 1]
    if (j) {
         
    }
    return hits
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
