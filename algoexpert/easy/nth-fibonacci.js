// F0 = 0
// F1 = 1
// example fibSeq = [0, 1, 1, 2, 3, 5];
// nth sequence is fibSeq[n - 1];

function getNthFib(n) {
    const fibSequence = [0, 1];
    while (fibSequence.length < n) {
        fibSequence.push(fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length - 1]);
    }
    return fibSequence[n - 1];
  }

  // Do not edit the line below.
  exports.getNthFib = getNthFib;
