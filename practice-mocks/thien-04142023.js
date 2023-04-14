// implementation
let data = [[3, 7, 5, 4, 7], [7, 3, 5, 6, 3], [12, 24, 8, 14, 17]]

/**
 * 30 mins each question
 * Given 2D array - wins, losses, points given up by soccer team (opponents have scored on the team)
 * Always going to have 3 nested array in array
 * Always in the same order
 * Goal - take 2D array - list the rankings by the winner  the most to the team that won the least games
 * If tie, then the winner is the one that gave up the least points
 * Team name doesn't matter, by order is fine
 * Showing order - also good to show data associated with that team
 *
 * Constraints:
 * Function should work for any number of teams
 *
 * Goal:  O(n) - stretch goal
 */

function rankingTeams(array) {
    let rankingArray = compileData(array);
    // { wins: 3, losses: 7, points: 12}
    // iterate through each array in tandem
    // array[0] wins
    // array[1] losses
    // array[2] points opponents scored

    // find some max, accumulate the data
    // find some way to sort the rankingArray - insertion sort
    rankingArray = rankTheTeams(rankingArray);
    return rankingArray;
}

function compileData(array) {
    const rankingArray = [];
    for (let i = 0; i < array[0].length; i++) {
        rankingArray.push({
            wins: array[0][i],
            losses: array[1][i],
            pointsGivenUp: array[2][i],
            team: i + 1
        })
    }
    return rankingArray;
}

function rankTheTeams(array) {
    array.sort((a, b) => {
        if (a.wins === b.wins) {
            return a.pointsGivenUp - b.pointsGivenUp
        } else {
            return b.wins - a.wins
        }
    });
    return array;
}

// O(nlogn)

// console.log(rankingTeams(data))

/**
 * feedback:  which team is in which position
 * function doesn't follow SRP
 * need less ambiguous variable names
 */


const boardOne = [1, 4, 3, 3, 3, 6, 7, 8, 2, 4, 6, 3, 3, 6, 8, 3, 23, 56, 7, 7, 8, 8]
const boardTwo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const boardThree = [3, 3, 5, 7, 8, 9, 5]
/**
 * D always moves first
 * If no moves to be made, D always wins
 * T moves second
 * Rules:
 * When a person has the ability to make a move, when there are two consecutive 3's in an array, they can make that move
 *
 * Example: board1: [1, 4, 3, 3] --> D can make a move
 * Next turn, [...4, 6, 3, 3] --> T can move
 * No more consecutive threes --> the last player who had a turn wins
 *
 * Return the name of the winner
 *
 * Constraints:
 * Data - always receive integers in the array, always positive
 * Any nested arrays? no, one board at a time
 * Empty array? no
 * Longest array? infinite
 *
 * Stretch goal - least amount of lines as possible TOTAL
 * refactor:  less lines, recursion
 */

// tally number of moves & keep some counter of how many moves are made
// search for consecutive 3's
// determine winner
function determineWinner(array) {
    const counter = determineNumMoves(array);
    return returnWinner(counter);
}

function determineNumMoves(array, counter = 0) {
    if (array.length < 2) {
        return counter;
    }
    if (array[0] === 3 && array[1] === 3) {
        return determineNumMoves(array.slice(2), counter + 1);
    } else {
        return determineNumMoves(array.slice(1), counter);
    }
}

function returnWinner(counter) {
    // if at the end, the counter is 0 -> return Denise
    if (counter === 0) {
        return 'Denise'
    }
    if (counter % 2) {
        return 'Denise'
    } else return 'Thien'
    // if at the end, the counter is even -> return Thien
    // if at the end, the counter is odd -> return Denise
}

console.log('Test Case One', determineWinner(boardOne), '\n\n')
console.log('Test Case Two', determineWinner(boardTwo), '\n\n')
console.log('Test Case Three', determineWinner(boardThree), '\n\n')

/**
 * Rubric:
 * Clarification and asking questions - good job, managed to go through problems, implement problems
 * Problem solving - doing well
 * Competency - fast/accurate:  double check variable names
 * Testing - need more test cases, edge case - all 3s - evaluate code before testing
 *
 */
