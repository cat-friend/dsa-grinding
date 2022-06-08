'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
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
 */

function getGroupedAnagrams(words) {
    const groups = [];
    // Write your code here
    // iterate through the array check the length of each word - check words that have the same length
    // a dictionary is involved
    // as iterating through array, iterate through each word, make a dictionary key: letters, value: frequency
    // the dictionary will live in an array, position of a word's dictionary is the say as its position in the array
    // ex: array[0] = cat, cat's dictionary is at dictionary[0]
    // for/in the dictionary obj
    // other method:  split each word into an array, sort the array, then rejoin
    // keep running container of groups, things that are equivalent


    // easier way:  use set, return length of set.entries();
    words.forEach((ele, i) => {
        words[i] = ele.split("");
        words[i].sort();
        words[i] = words[i].join("");
    })
    words.sort();
    console.log("words after sort", words)
    let refWord = [words.pop()];
    while (words.length) {
        const currWord = words.pop();
        if (currWord === refWord[0]) {
            refWord.push(currWord);
        }
        else {
            groups.push(refWord);
            refWord = [currWord]
        }
    }
    groups.push(refWord);
    console.log("groups", groups)
    return groups.length;
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
