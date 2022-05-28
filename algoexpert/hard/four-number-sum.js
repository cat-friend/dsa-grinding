function fourNumberSum(array, targetSum) {
    const twoSumObj = {
      13: [7, 6]
    };
    const quadruplets = [];
    for (const sum in twoSumObj) {
      if (twoSumObj.hasOwnProperty(targetSum - sum)) {
        quadruplets.push(twoSumObj[targetSum-sum].concat(twoSumObj[sum]))
      }
    }

  }

  // Do not edit the line below.
  exports.fourNumberSum = fourNumberSum;
