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
    const quadruplets = [];
    console.log("twoSumObj", twoSumObj)
    for (const key in twoSumObj) { // key = [[]]
        const targetDiff = targetSum - key
        if (twoSumObj.hasOwnProperty(targetDiff) && targetDiff != key) {
            twoSumObj[targetDiff].forEach((ele) => {
                twoSumObj[key].forEach((keyEle) => {
                    const quadruplet = ele.concat(keyEle);
                    quadruplets.push(quadruplet);
                })
            });
            delete twoSumObj[targetDiff];
            console.log("twoSumObj after delete", twoSumObj);
        }
    }
    return quadruplets;
}

console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
