function isMonotonic(array) {
    let isMonotonic = true;
    let isIncreasing;
    let isDecreasing;
    for (let i = 0; i < array.length - 1; i++) {
        const currNum = array[i];
        const nextNum = array[i + 1];
        if (nextNum > currNum) {
            isIncreasing = true;
        }
        if (nextNum < currNum) {
            isDecreasing = true;
        }
        isMonotonic = !(isIncreasing && isDecreasing);
    }
    return isMonotonic;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
