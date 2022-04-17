function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let possSmallestAbsDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
    let possNums = [arrayOne[0], arrayTwo[0]];
    let indexArrayOne = 0;
    let indexArrayTwo = 0;
    while (indexArrayOne < arrayOne.length && indexArrayTwo < arrayTwo.length) {
        let eleArrayOne = arrayOne[indexArrayOne];
        let eleArrayTwo = arrayTwo[indexArrayTwo];
        let currAbsDiff = Math.abs(eleArrayOne - eleArrayTwo);
        if (currAbsDiff === 0) {
            return [eleArrayOne, eleArrayTwo];
        }
        if (currAbsDiff < possSmallestAbsDiff) {
            possNums = [eleArrayOne, eleArrayTwo];
            possSmallestAbsDiff = currAbsDiff;
        }
        if (eleArrayOne < eleArrayTwo) {
            indexArrayOne++;
        }
        else indexArrayTwo++;
    }
    return possNums;
}


// Do not edit the line below.
exports.smallestDifference = smallestDifference;
