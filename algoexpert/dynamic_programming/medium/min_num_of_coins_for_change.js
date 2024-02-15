/**
 * Given an array of positive integers representing coin denominations and a single non-negative integer n representing a taret amount of money, write a function that returns the nsmallest number of coins needed to make change for that target amount using the ngiven coin denominations.
 *
 * Note that you have access to an unlimited amount of coins. In other words, if the denominations are [1, 5, 10], you have access to an unlimited amount of 1s, 5s, and 10s.
 *
 * If it's impossible to make change for the gatget amount, return -1
 */

/**
 * Hints:
 * 1. Try building an array of the min number of coins neheded to make change for all amounts between 0 and n inclusive. Note that no coins are needed to make change for 0.
 *
 * 2. Build up the array mentioned in the prev hint one coin denomination at a time. In other words, find the minium number of coins needed to make change for all amounts between 0 and n, with only one denomination, then two, etc until you use all denominations.
 */

/**
 * Notes:
 * $6, [1, 2, 4]
 * Build up solution by first solving solutions to smaller problems.
 *
 * Build an array of length of target amount + 1.
 * where each index is the amount of change to make
 * The value is the min number of coins to make change for that index in dollars
 *
 * index 0 = 0 because need 0 coins to make $0
 *
 * start with the first coin denom (denom[0]) then iterate thru amount array
 * is index of amount array <= to current denomination?
 * no - skip
 * yes - amount - denom + amount[amount - denom]
 *
 * coins is $2, iterate through
 * at amount = 2, need only 1 coin:
 * amount - denom + amount[amount - denom] -> 2 - 2 + 0
 *
 * For each denomination and for each amount that we're making change for, if the denomination <= amount then ways[amount] = Math.min(nums[amount], 1 + nums[amount - denom])
 * 1 + nums[amount - denom] - why? 1 curr coin + nums[amount - denom]
 * nums[amount] = nums[amount] !== undefined ? Math.min(nums[amount], 1 + nums[amount - denom])
 */

function minNumberOfCoinsForChange(n, denoms) {
    const nums = new Array(n + 1).fill(Infinity);
    nums[0] = 0;

    for (const coin of denoms) {
        nums.forEach((way, amount) => {
            if (coin <= amount) {
                nums[amount] = Math.min(nums[amount], 1 + nums[amount - coin])
            }
        })
    }
    return nums[n] !== Infinity ? nums.pop() : -1;
    // why is it 'n' instead of 'n + 1'? index for array is 0-based vs length is 1-based
}



const answer = -1;
const n = 7;
const denoms = [2, 4]
const result = minNumberOfCoinsForChange(n, denoms);
const passOrFail = (result, answer) => result === answer ? 'PASS' : 'FAIL';


console.log(`Result: ${result}`, passOrFail(result, answer));
