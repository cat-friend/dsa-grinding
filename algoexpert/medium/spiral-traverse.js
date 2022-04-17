function spiralTraverse(array) {
    const totalLength = array.length * array[0].length;
    let leftPointer = 0;
    let rightPointer = array[0].length - 1;
    let topPointer = 0;
    let bottomPointer = array.length - 1;
    const spiralOrderArray = [];
    while (leftPointer <= rightPointer && topPointer <= bottomPointer) {
        for (let i = leftPointer; i <= rightPointer; i++) {
            spiralOrderArray.push(array[topPointer][i]);
        }
        topPointer++;
        for (let i = topPointer; i <= bottomPointer; i++) {
            spiralOrderArray.push(array[i][rightPointer]);
        }
        rightPointer--;

        for (let i = rightPointer; i >= leftPointer; i--) {
            spiralOrderArray.push(array[bottomPointer][i]);
        }
        bottomPointer--;
        for (let i = bottomPointer; i >= topPointer; i--) {
            if (leftPointer === rightPointer) break;
            spiralOrderArray.push(array[i][leftPointer]);
        }
        leftPointer++;
    }
    return spiralOrderArray;
}


// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
