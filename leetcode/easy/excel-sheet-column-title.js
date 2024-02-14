/**
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 *
 * For example:
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 */
/**
 * Example 1:
 *
 * Input: columnNumber = 1
 * Output: "A"
 * Example 2:
 *
 * Input: columnNumber = 28
 * Output: "AB"
 * Example 3:
 *
 * Input: columnNumber = 701
 * Output: "ZY"
 *
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let colName = "";
    let number = columnNumber;
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    while (number > 0) {
        number--;
        colName = alphabet[number % 26].concat(colName);
        number = Math.floor(number / 26);
    }
    return colName;
};
console.log(convertToTitle(7101));

/**
 * Results:
 *
 * 1st attempt:
 * Runtime: 57ms (20%)
 * Memory: 41.98 mb (19%)
 *
 * 2nd attempt:
 * Runtime: 42 ms (93%)
 * 41.59 mb (62%)
 */

/**
 * Notes:
 * Need to subtract 1 (L40) because arrays index @ 0, nums index @ 1
 */
