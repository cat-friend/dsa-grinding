isValid("{[()]}()")

function isValid(s) {
    if (s.length % 2 > 0) return false;
    const stack = [];
    const matchingBrackets = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];
        if (matchingBrackets.hasOwnProperty(currChar)) {
            stack.push(currChar);
        }
        else {
            const lastInStack = stack.pop()
            if (matchingBrackets[lastInStack] === currChar) {
                continue
            }
            else return false;
        }
    }
    return Boolean(stack.length === 0)
};
