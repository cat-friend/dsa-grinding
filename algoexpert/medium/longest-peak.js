function longestPeak(array) {
    /**
     * hints:  find peak
     * expand outwards until you no longer have a peak
     */
    let currLength = 0;
    let maxLength = 0;
    if (array.length === 1) {
        return 1;
    }
    if (!array.length) return 0;
    for (let i = 1; i < array.length - 1; i++) {
        const isPeak = Boolean(array[i] < array[i+1] && array[i] > array[i-1]);
        if (isPeak) {
            let leftPointer = i-1;
            let rightPointer = i+1;
            while (leftPointer >= 0 && array[leftPointer - 1] < array[leftPointer]) {
                leftPointer--;
            }
            while (rightPointer <= array.length - 1 && array[rightPointer] < array[rightPointer + 1]) {
                rightPointer++;
            }
            currLength = rightPointer - leftPointer + 1;
            if (currLength > maxLength) {
                maxLength = currLength;
            }
        }
    }
    return maxLength;
  }

// Do not edit the line below.
exports.longestPeak = longestPeak;
