function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let currMinIndex = i;
        let minIndex = i;
        let min = array[i];
        while (minIndex < array.length) {
            if (array[minIndex] < min) {
                min = array[minIndex];
                currMinIndex = minIndex;
            }
            minIndex++
        }
        array[currMinIndex] = array[i]
        array[i] = min;
    }
    return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
