'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getMinimumOperationCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 *
 * A string is beautiful if no two adjacent characters are either
 * 1) the same
 * 2) adjacent in the alphabet
 * find the min num of operations to make a string beautiful
 * position % 26
 * dynamic programming
 */

function getMinimumOperationCount(s) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = getMinimumOperationCount(s);

    ws.write(result + '\n');

    ws.end();
}
