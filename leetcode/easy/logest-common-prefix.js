const longestCommonPrefix = function(strs) {
    const sortedStrs = strs.sort();
    let prefix = "";
    for (let i = 0; i < sortedStrs[0].length; i ++ ) {
        if (sortedStrs[0][i] === sortedStrs[sortedStrs.length - 1][i]) {
            prefix += sortedStrs[0][i];
        }
        else {
            break;
        }
    }
    return prefix;
};
