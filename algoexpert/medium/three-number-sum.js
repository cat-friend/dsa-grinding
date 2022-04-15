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

function threeNumberSum(array, targetSum) {
    const arrayOfTriplets = [];
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1
        let right = array.length - 1;
        while (left < right) {
            const sum = array[i] + array[left] + array[right];
            if (sum === targetSum) {
                arrayOfTriplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            }
            else if (sum < targetSum) {
                left++;
            }
            else if (sum > targetSum) {
                right--;
            }
        }
    }
    return arrayOfTriplets;
}




// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
