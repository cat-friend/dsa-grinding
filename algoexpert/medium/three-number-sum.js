function threeNumberSum(array, targetSum) {
    const arrayOfTriplets = [];
    array.sort((a, b) => a - b);
    threeNumberSumHelper(array, targetSum, arrayOfTriplets);
    return arrayOfTriplets;
}

function threeNumberSumHelper(array, targetSum, arrayOfTriplets) {
    // iterate through list
    // target sum - first num = sum of remaining nums (x)
    // next num (y) - is there a number (z) where y + z = x?
    for (let i = 0; i < array.length - 2; i++) {
        const firstPossNum = array[i];
        const twoNumsShouldAddUpToThis = targetSum - firstPossNum;
        for (let j = i + 1; j < array.length - 1; j++) {
            const secondPossNum = array[j]
            const thirdNumMustBe = twoNumsShouldAddUpToThis - secondPossNum;
            const thirdNumIndex = array.indexOf(thirdNumMustBe, j);
            if (thirdNumIndex > -1) {
                arrayOfTriplets.push([firstPossNum, secondPossNum, thirdNumMustBe])
            }
        }
    }
}
// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
