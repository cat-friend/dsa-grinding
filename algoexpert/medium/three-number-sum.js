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
    const firstThird = Math.floor(array.length / 3);
    const secondThird = firstThird * 2;
    for (let i = 0; i < firstThird; i++) {
        const firstPossNum = array[i];
        const twoNumsShouldAddUpToThis = targetSum - firstPossNum;
        for (let j = i + firstThird; j < secondThird; j++) {
            const secondPossNum = array[j]
            const thirdNumMustBe = twoNumsShouldAddUpToThis - secondPossNum;
            const thirdNumIndex = array.indexOf(thirdNumMustBe, j + firstThird);
            if (thirdNumIndex > -1) {
                arrayOfTriplets.push([firstPossNum, secondPossNum, thirdNumMustBe])
            }
        }
    }
}

// previous attempt:  this doesn't account for duplicates; will find all possible matches and will repeat triples
// function threeNumberSumHelper(array, targetSum, arrayOfTriplets) {
//     // iterate through list
//     // target sum - first num = sum of remaining nums (x)
//     // next num (y) - is there a number (z) where y + z = x?
//     const firstThird = Math.floor(array.length / 3);
//     const secondThird = firstThird * 2;
//     for (let i = 0; i < firstThird; i++) {
//         const firstPossNum = array[i];
//         const twoNumsShouldAddUpToThis = targetSum - firstPossNum;
//         for (let j = i + firstThird; j < secondThird; j++) {
//             const secondPossNum = array[j]
//             const thirdNumMustBe = twoNumsShouldAddUpToThis - secondPossNum;
//             const thirdNumIndex = array.indexOf(thirdNumMustBe, j + firstThird);
//             if (thirdNumIndex > -1) {
//                 arrayOfTriplets.push([firstPossNum, secondPossNum, thirdNumMustBe])
//             }
//         }
//     }
// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
