/**
 * @param {number} x
 * @return {number}
 */

-123
var reverse = function(x) {
    // convert num to string
    const numString = x.toString(); // "-123"
    let reverseNum = "";
    // iterate through string
    for (let i = numString.length - 1; i > 0; i--) {
        reverseNum += numString[i];
    }
    // 321
    if (numString[0] === '-') {
        reverseNum = `-${reverseNum}`
    } else {
        reverseNum += numString[0];
    }
    reverseNum = Number(reverseNum);
    // if outside range, return 0
    if (reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1) {
        return 0
    }
    return reverseNum;
    // else return num
};

// -2^(31) --> Math.pow(x, y) = x^y

// results:
// runtime:  beat 19%
// memory:  beat 88%
