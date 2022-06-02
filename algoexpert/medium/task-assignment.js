/**
 *
 * @param {*} k - number of workers
 * @param {*} tasks - array of positive integers representing durations of tasks that must be completed by the workers
 *
 * @returns returns array of pairs of indices of tasks assigned to each worker
 *  --> constraints task must be completed as fast as possible
 * split this into two functions:  sorted tasks, task index locator
 */

function taskAssignment(k, tasks) {
    const tasksCopy = [...tasks]
    const taskAssignmentArray = new Array(k).fill([]);
    let taskAssignmentArrayIndex = 0;
    console.log("taskAA", taskAssignmentArray);
    while (tasksCopy.length) {
        const max = Math.max(...tasksCopy);
        const maxIndex = tasksCopy.indexOf(max);
        taskAssignmentArray[taskAssignmentArrayIndex].push(max);
        tasksCopy.splice(maxIndex, 1);
        const min = Math.min(...tasksCopy);
        const minIndex = tasksCopy.indexOf(min);
        taskAssignmentArray[taskAssignmentArrayIndex].push(min);
        tasksCopy.splice(minIndex, 1);
        taskAssignmentArray[taskAssignmentArrayIndex] = [maxIndex, minIndex]
        taskAssignmentArrayIndex++;
        console.log("tasksCopy", tasksCopy)
    }
    return taskAssignmentArray;
  }

  console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]))
  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;
