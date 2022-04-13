function findThreeLargestNumbers(array) {
    const largeNumArray = [];
    while (largeNumArray.length < 3) {
        const max = Math.max(...array);
        largeNumArray.unshift(max);
        array.splice(array.indexOf(max), 1);
    }
    return largeNumArray;
  }

  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
