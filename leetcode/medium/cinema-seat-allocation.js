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
    prevRow = currRow;=
    what happens when you get to the end? need to make currRow !== prevRow trigger, so make a dummy entry - after sort, push [0, 0]
*/
var maxNumberOfFamilies = function (n, reservedSeats) {
    if (n * 10 === reservedSeats.length) return 0;
    let numRows = n;
    let count = 0;
    reservedSeats.sort((a, b) => {
        return a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]
    });
    reservedSeats.push([-1, 0]);
    let prevRow = reservedSeats[0][0];
    let rowSeatsTaken = {};
    let rowPoss = 3;
    for (let i = 0; i < reservedSeats.length; i++) {
        const currSeat = reservedSeats[i][1];
        const currRow = reservedSeats[i][0]
        if (currRow !== prevRow) {
            console.log("currSet", reservedSeats[i], "\ncount", count, "\nrowSeatsTaken", rowSeatsTaken, "\nnumRows", numRows)
            if (rowSeatsTaken.hasOwnProperty(5) || rowSeatsTaken.hasOwnProperty(6)) rowPoss = 0;
            else {
                if (rowSeatsTaken.hasOwnProperty(2) || rowSeatsTaken.hasOwnProperty(3) || rowSeatsTaken.hasOwnProperty(8) || rowSeatsTaken.hasOwnProperty(9)) rowPoss--;
                if (rowSeatsTaken.hasOwnProperty(4) || rowSeatsTaken.hasOwnProperty(5) || rowSeatsTaken.hasOwnProperty(6) || rowSeatsTaken.hasOwnProperty(7)) rowPoss--;
            }
            if (rowSeatsTaken.hasOwnProperty(4) || rowSeatsTaken.hasOwnProperty(5)) {
                rowPoss--;
                if (rowSeatsTaken.hasOwnProperty(6) || rowSeatsTaken.hasOwnProperty(7)) rowPoss = 0
            }

            count = rowPoss >= 0 ? count + rowPoss : count + 0;
            rowSeatsTaken = {};
            rowPoss = 2;
            numRows--;
        }
        rowSeatsTaken[currSeat] = currSeat;
        prevRow = currRow;
        console.log("count at end of iteration", count)
    }
    console.log("count", count)
    console.log("numRows", numRows)
    return count + (numRows) * 2;
};


console.log(maxNumberOfFamilies(3, [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]));
