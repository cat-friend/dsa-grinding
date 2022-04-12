// redShirtSpeeds - speeds of all riders wearing red
// blueShirtSpeeds - speeds of all riders wearing blue
// if `fastest = true`, function should return max possible total speed; max poss total speed = sum of the speeds of all tandem bikes being ridden
// if `fastest = false`, function should return min total speed (sums of min speeds);

/**
 * example:
 * redShirtSpeeds = [5, 5, 3, 9, 2];
 * blueShirtSpeeds = [3, 6, 7, 2, 1];
 * fastest = true;
 * --> returns 32
 * how do you get the fastest speed?
 * sort fastest of them ascending, sort the other descending then pair
 * rss = [2, 3, 5, 5, 9];
 * bss = [7, 6, 3, 2, 1];
 * max = 7 + 6 + 5 + 5 + 9 = 32
 */


// refactoring notes:  `if (fastest)` does it matter which is ascending, which is descending? no, just needs to be opposites
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let speed = 0;
    let fastestTeam = redShirtSpeeds;
    let slowestTeam = blueShirtSpeeds
    if (fastest) {
        fastestTeam.sort((a, b) => a - b);
        slowestTeam.sort((a, b) => b - a);
        for (let i = 0; i < fastestTeam.length; i++) {
            speed += Math.max(fastestTeam[i], slowestTeam[i]);
        }
    }
    else {
        fastestTeam.sort((a, b) => a - b);
        slowestTeam.sort((a, b) => a - b);
        for (let i = 0; i < fastestTeam.length; i++) {
            speed += Math.max(fastestTeam[i], slowestTeam[i]);
        }
    }
    return speed;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
