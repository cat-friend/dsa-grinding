function moveElementToEnd(array, toMove) {
    for (let i = array.length - 1; i >= 0; i--) {
        const ele = array[i];
        if (ele === toMove) {
            const moveThis = array.splice(i, 1);
            array.push(...moveThis);
        }
    }
    return array;
  }

  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
