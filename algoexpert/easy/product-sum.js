// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// probably use recursion
// iterate through array - if (array[i].isArray), then flatten
// at all values where depth = n, sum the values and then multiply by n; add product to running product sum
// same thing as flattening input array and multiplying each value by their depth
// flatten everything first and multiply each value by depth;

function productSum(array, depth = 1) {
    if (!array.length) {
        return;
    }
    let currVal = array.shift();
    while (array.length) {
        if (Array.isArray(currVal)) {
            
        }
    }
}

// Do not edit the line below.
exports.productSum = productSum;
