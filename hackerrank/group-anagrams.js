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
 * Complete the 'getGroupedAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 * Two strings are anagrams if they have the same characters in the same frequency but the characters are in different order
 */

function getGroupedAnagrams(words) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wordsCount = parseInt(readLine().trim(), 10);

    let words = [];

    for (let i = 0; i < wordsCount; i++) {
        const wordsItem = readLine();
        words.push(wordsItem);
    }

    const result = getGroupedAnagrams(words);

    ws.write(result + '\n');

    ws.end();
}
