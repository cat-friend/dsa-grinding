function fourNumberSum(array, targetSum) {
    const twoSumObj = {};
    // traverse, make twoSumObj
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i === j) continue;
            const twoSum = array[i] + array[j];
            if (twoSumObj.hasOwnProperty(twoSum)) {
                twoSumObj[twoSum].push([array[i], array[j]]);
            }
            else {
                twoSumObj[twoSum] = [[array[i], array[j]]]
            }
        }
    }
    console.log(twoSumObj)
    const quadruplets = [];
    for (const key in twoSumObj) { // key = [[]]
        const targetDiff = targetSum - key
        if (key.length > 1) {
            for (const pair in key) {
                
            }
        }
        if (twoSumObj.hasOwnProperty(targetDiff)) {
            // if (twoSumObj[targetDiff].length > 1) { // twoSum = [[1, 2], [3, 0]]
            //     for (const pairNums of twoSumObj[targetDiff]) { // [1, 2]
            //         quadruplets.push(twoSumObj[sum].concat(pairNums))
            //     }
            // }
            quadruplets.push(twoSumObj[targetDiff].concat(twoSumObj[key]))
        }
    }
    return quadruplets;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
