function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < array.length; i++) {
            let currNum = array[i];
            let prevNum = array[i - 1];
            if (currNum < prevNum) {
                array[i] = prevNum;
                array[i - 1] = currNum;
                sorted = false;
            }
        }
    }
    return array;
  }

  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;
