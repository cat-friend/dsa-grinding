/**
 * Find nums of even nums of digits
 * Array of integers
 * Write a function how many entries in array contain an even number of digits
 *
 * Constraints/assumptions:
 * Empty array? maybe!
 * Array will _only_ contain integers
 * Return value - num of entries that have an even num of digits
 * Range of integers - 1 - 10^5
 *
 * Examples:
 * Edge case:  empty array []
 * Return 0
 *
 * Edge case:  [10, 10, 10, 10, 10, 11, 22, 99] oops, all evens! - same as array.length = 8
 * Edge case: [1, 2, 3, 4, 5, 6, 100, 200, 33333] oops, all odds! - return 0
 */

function findNumOfEvenDigits(nums) {
    let evenDigitsCounter = 0;
    for (const num of nums) {
        const numString = new String(num)
        if (numString.length % 2 === 0) {
            evenDigitsCounter++
        }
    }
    return evenDigitsCounter;
}
// Time complexity = O(n)
// Space complexity = O(n)
// Results:
// runtime: 58 ms, beats 80.91%
// memory: 44.8 mb, beats 15.4%

// dividing by 10, 1000, 100000
// 99 % 10 = 9.9
// 99 % 1000 = .099
// 999 % 10 = 99.9
// Math.log10(num) -- if it's an even number then it's odd digits
// Math.floor(Math.log10(num)) % 2 counter++

// Base case scenario - what if the entries could be in nested arrays?
// flatten array first

function mathFindNumOfEvenDigits(nums) {
    let evenDigitsCounter = 0;
    for (const num of nums) {
        if (Math.floor(Math.log10(num)) % 2 > 0) {
            evenDigitsCounter++;
        }
    }
    return evenDigitsCounter;
}
// Results:
// runtime: a little faster
// memory:  a little less

function recurseFindNums(nums, evenDigitsCounter = 0) {
    if (!nums.length) {
        return evenDigitsCounter;
    }
    if (Array.isArray(nums[0])) {
        return recurseFindNums([...nums[0], ...nums.slice(1)], evenDigitsCounter)
    }
    else {
        if (Math.floor(Math.log10(nums[0])) % 2 > 0) {
            evenDigitsCounter++;
        }
        return recurseFindNums(nums.slice(1), evenDigitsCounter)
    }
}
// how would recursion affect time/space complexity?
// size of call stack increases

const allEvens = [10, 10, 10, 10, 10, 11, 22, 99]
// expect length = 8;
const allOdds = [1, 2, 3, 4, 5, 6, 100, 200, 33333]
// expect length = 0;
const empty = [];
// expect length = 0;
const testCase = [10, 1, 10, 999, 10, 10, 10, 11, 22, 99, 1, 2, 3, 4, 5, 6, 100, 200, 33333, 11111]
// expect length = 9

const nested = [10, [20, 30, [40, 5, 5, 50], 60, [70]]]

// console.log('\n\nallEvens', findNumOfEvenDigits(allEvens))
// console.log('\n\nallOdds', findNumOfEvenDigits(allOdds))
// console.log('\n\nempty', findNumOfEvenDigits(empty))
// console.log('\n\ntestCase', findNumOfEvenDigits(testCase))

// console.log('\n\nallEvens', mathFindNumOfEvenDigits(allEvens))
// console.log('\n\nallOdds', mathFindNumOfEvenDigits(allOdds))
// console.log('\n\nempty', mathFindNumOfEvenDigits(empty))
// console.log('\n\ntestCase', mathFindNumOfEvenDigits(testCase))


// console.log('\n\nrecursive case', recurseFindNums(nested))
console.log('\n\nLC', findNumOfEvenDigits([12,345,2,6,7896]))

// feedback:
// go through problem solving methods vs. intuition - communicate more clearly when debugging
