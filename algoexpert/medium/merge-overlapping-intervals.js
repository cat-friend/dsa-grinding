function mergeOverlappingIntervals(array) {
    array.sort((a, b) => {
        return a[0] === b[0] ? (a[1] < b[1] ? -1 : 1) : a[0] - b[0];
    })
    console.log(array)
    const mergedArray = [array.shift()];
    console.log("mergedArray", mergedArray)
    while (array.length) {
        const currInterval = array.shift();
        let lastValueInMergedArray = mergedArray[mergedArray.length - 1]
        if (lastValueInMergedArray[1] >= currInterval[0]) {
            if (lastValueInMergedArray[1] <= currInterval[1]) {
                mergedArray[mergedArray.length - 1] = [lastValueInMergedArray[0], currInterval[1]];
            }
        }
        else mergedArray.push(currInterval);
    }
    return mergedArray;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
