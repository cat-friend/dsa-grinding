/**
 * @param {string} s
 * @return {number}


Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

APPROACH:
set up dictionary of roman numerals -
    key: value
    RN: value of RN
have running count
roman numerals - written in descending order

XCXIV
set up queue? or look at thing in front of it?
iterate through string -
if currRN > prevRN
    need to subtract prevRN from currRN and then add to count
else {
    if (currRN <= prevRN) {
        if (nextRN) {
            if nextRN > currRN
                continue
            else nextRN < currRN -- add value of curr to running
        }
    }
}

 */

// LVIII
 var romanToInt = function(s) {
    let count = 0;

    const rnDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    if (s.length === 1) {
        return rnDict[s]
    }
    if (rnDict[s[0]] >= rnDict[s[1]]) count += rnDict[s[0]];
    for (let i = 1; i < s.length; i++) {
        const currRN = rnDict[s[i]];
        console.log(currRN);
        const prevRN = rnDict[s[i - 1]];
        const nextRN = rnDict[s[i + 1]];
        if (currRN > prevRN) {
            count += currRN - prevRN;
        }
        else {
            if (nextRN) {
                if (nextRN > currRN) continue;
            }
            count += currRN
        }
    }
    return count;
};

console.log(romanToInt("LVIII"));
