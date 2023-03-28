function maxSubsetSumNoAdjacent(array) {
    if (!array.length) {
        return 0;
    }
    if (array.length === 1) {
        return array[0]
    }
    let secondCombo = array[0];
    let firstCombo = Math.max(array[0], array[1]);
    let currentMax = firstCombo;
    for (let i = 2; i < array.length; i++) {
        currentMax = Math.max(firstCombo, secondCombo + array[i]);
        secondCombo = firstCombo
        firstCombo = currentMax;

    }
    return currentMax;
  }
