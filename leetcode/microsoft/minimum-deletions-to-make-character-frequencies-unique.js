/**
 * @param {string} s
 * @return {number}
 */

/*
APPROACH:
make object - key = letter; value = frequency
s.sort((a, b) => obj[a] - obj[b]);
make set to store frequencyes
iterate through string - as iterating, check if set frequency has frequency of char already in there
if it does, decrease by 1 --> check if freq - 1 is in set --> keep going until freq is no longer in set
each decrease by 1 --> deletions++



*/
var minDeletions = function (s) {
    let deletions = 0;
    const object = makeObject(s);
    s = s.split("");
    s.sort((b, a) => object[a] - object[b]);
    const frequencies = new Set();
    const letters = new Set();
    for (const letter of s) {
        let letterFrequency;
        if (letters.has(letter)) {
            continue
        }
        else {
            letters.add(letter);
            letterFrequency = object[letter];
            while (frequencies.has(letterFrequency)) {
                letterFrequency--;
                deletions++
            }
            if (letterFrequency) frequencies.add(letterFrequency)
        }
    }
    return deletions;
};

function makeObject(s) {
    const object = {};
    for (const letter of s) {
        if (!object.hasOwnProperty(letter)) {
            object[letter] = 1;
        }
        else {
            object[letter] += 1
        }
    }
    return object;
}

console.log(minDeletions("aaabbbcc"))
