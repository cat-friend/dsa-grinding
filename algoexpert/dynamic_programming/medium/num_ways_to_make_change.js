/**
 * Given an array of distinct positive integers representing coin denomincations and a singel non-negative integer n representing a target amount of money, write a function that returns the number of ways to make change for that target amount using the given coin denominations.
 *
 * Note that an unlimited amount of coins is at your disposal.
 */


/**
 * Hint: try building an array of the number of ways to make change for all amounts between 0 and n inclusive. Note that there is only one way to make change for 0:  no coins.
 */

/** Notes:
 * Example:
 * n = 10
 * denoms = [1, 5, 10, 25]
 *
 * Answer: 4 - 1 x $10, 2 x $5, 1 x $5 + 5 x $1, 1 x $10
 *
 * const ways = []
 * each index is a specific amount of money, all the way up to target amount
 * every value stored at each index is the min num of ways to make change based on denominations to make change based on amount represented by index
 *
 * initializing array, all ways to make change is 0 except at index 0 - only way to make change for 0 dollars which is 1 - no coins -> this serves as base case
 *
 * then iterate through denominations and then iterate through all the amounts and update the number of ways there are to make change for that amount
 *
 * first start with index 0 for both arrays->
 * denom[0] is 1, ways[0] is 0:
 * is 1 <= 0? can we use a $1 to make $0 in change? no, so skip -> increment pointer for 'ways' array
 *
 * denom[0] is 1, ways[1] is 1
 * then index 1 -> is 1 <= 1? yes -> update our 'ways' array. ways[1] += ways[1] + ways[1-1]
 *
 * then move on to amount 2
 * is 1 <= 2? yes
 * ways[2] += ways[2 - 1]
 * until you reach the end of ways array
 *
 * then move to denom[1] = $5
 * is 5 <= index of ways?
 * ways[5] = ways[5 - 5] = 2
 * if denom <= ways index (which is amount) then ways[amount] += ways [amount - denom]
 *
 * 'ways' array is a cache of all the ways to make change
 */

function numberOfWaysToMakeChange(n, denoms) {
   // first make `ways` array where length of ways array is n, ways[0] = 1 -> only 1 way to make change for $0 -> no coins
   const ways = new Array(n + 1).fill(0);
   ways[0] = 1;

   for (const coin of denoms) {
    ways.forEach((permutations, amount) => {
        if (coin <= amount) {
            ways[amount] += ways[amount - coin]
        }
    })
   }
   return ways.pop();
}

const answer = 4;
const n = 10;
const denoms = [1, 5, 10, 25]
const result = numberOfWaysToMakeChange(n, denoms);
const passOrFail = (result, answer) => result === answer ? 'PASS' : 'FAIL';


console.log(`Result: ${result}`, passOrFail(result, answer));
