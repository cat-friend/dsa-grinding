// find min amount of change that we can't make
// first sort incoming array
/**
 * [1, 1, 2, 3, 5, 7, 22]
 * can't make 20 because 1 + 1 + 3+ 4+ 5 + 7 = 19 and 22 > amount of change (19) + 1
 * so if next num > amount of change + 1, then can't make amount of change + 1
 * when `for` loop finishes, can't make change + 1 because no more coins to add
 */

function nonConstructibleChange(coins) {
    if (coins.length === 0) return 1;
    let change = 0;
    coins.sort((a, b) => a - b);
    // iterate through input array
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > change + 1) {
            return change + 1
        }
        else { change += coins[i] }
    }
    return change += 1;
}
