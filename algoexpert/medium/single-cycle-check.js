function hasSingleCycle(array) {
    // APPROACH:
    // probably use an obj to keep track of visited indices
    // use a while loop and have a counter
    // when the counter = array.length, exit the while loop and return Boolean(obj.entries.length === array.length);
    // if the obj contains the index, return true
    // how to jump around the array?
    // indexSum = currIndex + array[currIndex]
    // if indexSum < 0, array.length + indexSum
    let currIndex = 0;
    let counter = 0;
    const visited = {};
    while (counter < array.length) {
        const value = array[currIndex];
        currIndex = currIndex + array[currIndex] < 0 ? array.length + ( (currIndex + array[currIndex]) % array.length) : (currIndex + array[currIndex]) % array.length;
        console.log("currIndex", currIndex)
        if (visited.hasOwnProperty(currIndex)) {
            if (counter === array.length - 1 && Boolean(Object.entries(visited).length === array.length)) return true;
            return false
        };
        visited[currIndex] = currIndex;
        counter++
        console.log("counter", counter, "\nvisited", visited)
    }
    return Boolean(Object.entries(visited).length === array.length);
}

// console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]))
// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
