// F0 = 0
// F1 = 1
// example fibSeq = [0, 1, 1, 2, 3, 5];
// nth sequence is fibSeq[n - 1];

function getNthFibSuboptimal(n) {
    const fibSequence = [0, 1];
    while (fibSequence.length < n) {
        fibSequence.push(fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length - 1]);
    }
    return fibSequence[n - 1];
}
// above has time complexity of O(n), space complexity of O(n);

// refactoring - can i do it in constant space?
// only interested in last two numbers of sequence
function getNthFib(n) {
    const fibSequence = [0, 1];
    let counter = 2;
    let nthFib;
    while (counter < n) {
        // add the two nums in array
        // fibSeq[0] = fibSeq[1]
        // fibSeq[1] = nthFib;
        nthFib = fibSequence[0] + fibSequence[1];
        fibSequence[0] = fibSequence[1];
        fibSequence[1] = nthFib;
        counter++;
    }
    if (n < counter) { return fibSequence[n - 1] };
    return fibSequence[1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
