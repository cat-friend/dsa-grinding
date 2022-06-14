/*
A cinema has n rows of seats, numbered from 1 to n and there are ten seats in each row, labelled from 1 to 10 as shown in the figure above.

Given the array reservedSeats containing the numbers of seats already reserved, for example, reservedSeats[i] = [3,8] means the seat located in row 3 and labelled with 8 is already reserved.

AISLE SPLITS - 3/4, 7/8

Return the maximum number of four-person groups you can assign on the cinema seats. A four-person group occupies four adjacent seats in one single row. Seats across an aisle (such as [3,3] and [3,4]) are not considered to be adjacent, but there is an exceptional case on which an aisle split a four-person group, in that case, the aisle split a four-person group in the middle, which means to have two people on each side.
*/
/*
seating arrangement possibilities: A: [2,3,4,5], B: [4,5,6,7], C: [6,7,8,9]
iterate through reserved seats:
check occupied seats against possible seating arrangements
if 1 < reservedSeat < 6 - isAPoss = false;
if 6, 7 are occupied, eliminate [4-7] and [6-9]
if 4,5 are occupied, eliminate [2-5] and [4-7]
if 1 || 10 occupied, only 2 possible arrangements
make an object
key: row
grouping: {[2, 3, 4, 5], [4, 5, 6, 7], [6,7, 8, 9]}
input is not sorted -- need to sort input
iterate through reservedSeats:
if currRow !== prevRow, then count += seatsObj[prevRow].keys.length; and prevRow = currRow; and numRows--
if 1 currSeat < 6 - delete seatsObj[currRow][[2-5]]
turn reserved seats into an object
    if currRow !== prevRow
        --eval the reserved seats
        --if reserved seats = 2 || 3 || 8 || 9 -> rowPoss--
        -- if reserved seats has 4 || 5 || 6 || 7 --> rowPoss--
        count += rowPoss
        -- reservedSeats = {};
        -- rowPoss = 2;
        -- rowNums--
    prevRow = currRow;
    reservedSeats = currRes[1];
    what happens when you get to the end? need to make currRow !== prevRow trigger, so make a dummy entry - after sort, push [0, 0]
*/
var maxNumberOfFamilies = function (n, reservedSeats) {
    if (n * 10 === reservedSeats.length) return 0;
    let numRows = n;
    let count = 0;
    reservedSeats.sort((a, b) => {
        return a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]
    });
    let prevRow = 0;
    const freeSeats = {};
    while (reservedSeats.length) {
        const currRes = reservedSeats.shift();
        const currRow = currRes[0];
        const currSeat = currRes[1];
        if (currRow === prevRow) {
            occupiedSeats.push(currSeat)
        }
        else {
            if (occupiedSeats.length) {
                numRows--
            }
        }
    }
    return count + (n - numRows) * 3;
};



maxNumberOfFamilies(4, [[4,3],[1,4],[4,6],[1,7]])
