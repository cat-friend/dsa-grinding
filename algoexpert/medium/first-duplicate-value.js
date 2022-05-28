function firstDuplicateValue(array) {
    const uniqueNums = {}
    for (const num of array) {
        if (uniqueNums.hasOwnProperty(num)) {
            return num;
        }
        else {
            uniqueNums[num] = num;
        }
    }
    return -1
  }

  firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 7])

  // Do not edit the line below.
  exports.firstDuplicateValue = firstDuplicateValue;
