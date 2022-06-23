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
    let riverSize = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1 && !visitedNodes.has(`[${i}, ${j}]`)) {
                riverSize.push([i, j]);
                visitedNodes.add(`${[i, j]}`)
                console.log("visitedNodes", visitedNodes)
                let adjacentNodes = findAdjacentHits(matrix, [i, j], visitedNodes);
                while (adjacentNodes.length) {
                    const currNode = adjacentNodes.pop();
                    riverSize.push(currNode)
                    adjacentNodes = adjacentNodes.concat(findAdjacentHits(matrix, currNode, visitedNodes));
                }
                console.log("riverSize", riverSize);
                if (riverSize.length) sizes.push(riverSize.length);
                riverSize = [];
            }
        }
    }
    return sizes
}

function findAdjacentHits(matrix, coordinates, set) {
    const [i, j] = coordinates;
    const hits = [];
    // find north
    // if it's at the top (i = 0), can't find north, otherwise, [i - 1][j]
    if (i > 0) {
        if (matrix[i - 1][j]) {
            if (!set.has(`${[i - 1, j]}`)) {
                hits.push([i - 1, j]);
                set.add(`${[i - 1, j]}`)
            }
        }
    }
    // find south
    // if it's at the bottom (i = matrix.length - 1), can't find south, otherwise [i + 1]
    if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) {
            if (!set.has(`${[i + 1, j]}`)) {
                hits.push([i + 1, j]);
                set.add(`${[i + 1, j]}`)
            }
        }
    }
    // find east
    // if it's at [i][matrix[i].length - 1], can't find east; otherwise [i][j+1]
    if (j < matrix[i].length - 1) {
        if (matrix[i][j + 1]) {
            if (!set.has(`${[i, j + 1]}`)) {
                hits.push([i, j + 1]);
                set.add(`${[i, j + 1]}`);
            }
        }
    }
    // find west
    // if it's at [i][0] can't find west, otherwise [i][j - 1]
    if (j > 0) {
        if (matrix[i][j - 1]) {
            if (!set.has(`${[i, j - 1]}`)) {
                hits.push([i, j - 1]);
                set.add(`${[i, j - 1]}`);
            }
        }
    }
    console.log("hits", hits)
    return hits
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
