// [3, 2, 1, 2, 6]
// [1, 2, 2, 3, 6] - want to sort in ascending order and not include the last number
// [0 + (1) + (1 + 2) + (1 + 2 + 2 )+ (1 + 2 + 2 + 3)]
// [0, 1, 1 + 2, 1 + 2 + 2, 1 + 2 + 2 + 3]
// waiting time for second number is equal to processing time of first number, or queries[i - 1];
// total wait time when i = 0 is 0

function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b)
    let minWaitTime = 0;
    let totalFunctionsToProcess = queries.length - 1;
    let remainingProcesses;

    for (let i = 0; i < totalFunctionsToProcess; i++) {
        remainingProcesses = totalFunctionsToProcess - i;
        minWaitTime += queries[i] * remainingProcesses
    }
    return minWaitTime;
  }


  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;
