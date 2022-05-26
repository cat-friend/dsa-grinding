function longestPeak(array) {
    // peak = length of increasing + length of decreasing
    if (!array.length) return 0;
    let currPeakArray = [array[0]];
    let hasPeaked = false;
    let longestPeakArray = [];
    // traverse array


    for (let i = 1; i < array.length; i++) {
        const currNum = array[i];
        const prevNum = array[i - 1];
        console.log("start")
        console.log("hasPeaked?", hasPeaked);
        console.log("currNum", currNum);
        console.log("prevNum", prevNum);
        console.log("currPeakArray", currPeakArray)
        console.log("longestePeakArray", longestPeakArray)
        if (hasPeaked) {
            if (currNum < prevNum) currPeakArray.push(currNum)
            if (currNum > prevNum || currNum === prevNum) {
                if (currPeakArray.length > longestPeakArray.length) {
                    longestPeakArray = currPeakArray;
                    currPeakArray = [currNum];
                }
                if (currNum > prevNum) {
                    currPeakArray = [prevNum, currNum]
                }
                hasPeaked = false;
            }

        }
        else {
            if (currNum > prevNum) currPeakArray.push(currNum);
            if (currNum < prevNum) {
                hasPeaked = true;
                currPeakArray.push(currNum);
            }
            if (currNum === prevNum) {
                currPeakArray = [currNum]
            }
        }
    }
    if (currPeakArray.length > longestPeakArray.length) {
        longestPeakArray = currPeakArray;
    }
    return longestPeakArray.length;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
