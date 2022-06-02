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
    const taskIndicesObj = tasksObjectMaker(tasks);
    tasks.sort((a, b) => a - b);
    let minPointer = 0;
    let maxPointer = tasks.length - 1;
    const taskAssignmentArray = [];
    while (minPointer < maxPointer) {
        const minIndex = taskIndicesObj[tasks[minPointer]].pop();
        const maxIndex = taskIndicesObj[tasks[maxPointer]].pop();
        taskAssignmentArray.push([minIndex, maxIndex]);
        minPointer++;
        maxPointer--;
    }
    return taskAssignmentArray;
  }

  function tasksObjectMaker(tasks) {
      const tasksObj = {};
      for (let i = 0; i < tasks.length; i++) {
          if (tasksObj.hasOwnProperty(tasks[i])) {
              tasksObj[tasks[i]].push(i);
          }
          else {
              tasksObj[tasks[i]] = [i]
          }
      }
      return tasksObj;
  }

  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;
