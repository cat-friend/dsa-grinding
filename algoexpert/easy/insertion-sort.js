function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0) {
            let currNum = array[j]
            if (currNum < array[j-1]) {
                array[j] = array[j - 1];
                array[j - 1] = currNum
            }
            j--
        }
    }
    return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
