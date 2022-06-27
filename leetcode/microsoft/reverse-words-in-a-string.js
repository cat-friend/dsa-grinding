/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.trim();
    let array = s.split(" ");
    const stringArr = [];
    for (let i = array.length - 1; i > -1; i--) {
        if (array[i]) {
            stringArr.push(array[i]);
        }
    }
    s = stringArr.join(" ")
    return s;
};

console.log(reverseWords("a good   example"))
