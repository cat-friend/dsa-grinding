// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// probably use recursion
// iterate through array - if (array[i].isArray), then flatten
// at all values where depth = n, sum the values and then multiply by n; add product to running product sum
// same thing as flattening input array and multiplying each value by their depth
// flatten everything first and multiply each value by depth;

function productSum(array, depth = 1) {
    let newArray = [];
    if (!array.length) {
        console.log(newArray);
        return;
    }
    console.log("array[0]", array[0]);
    if (Array.isArray(array[0])) {
        array[0].forEach((ele, i) => {
            array[0][i] = ele * (depth + 1);
        });
        return productSum(array, depth + 1);
    }
    else {
        newArray.push(array.shift());
        console.log("newarray", newArray);
        return newArray.concat(productSum(array));
    }
}

// Do not edit the line below.
exports.productSum = productSum;
