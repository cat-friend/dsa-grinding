/*
given a string representing a positive integer and a character digit

return the resulting string after removing EXACTLY ONE occurrence of digit from number such that the value of the resulting string in decimal form is maximized

APPROACH:
let max = 0;
probably need a `for` loop to iterate through the number
at each index, check if number[i] == digit
if yes, potentialMax = +(slice(0, i) + slice(i + 1))
max = max < potentialMax ? potentialMax : max;

what do i return? string?

return `${max}`

*/

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let max = 0, potentialMax = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            potentialMax = +(number.slice(0, i) + number.slice(i + 1));
            max = potentialMax > max ? potentialMax : max;
        }
    }
    return `${max}`
};
