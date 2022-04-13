// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// probably use recursion
// iterate through array - if (array[i].isArray), then flatten
// at all values where depth = n, sum the values and then multiply by n; add product to running product sum
// same thing as flattening input array and multiplying each value by their depth
// flatten everything first and multiply each value by depth;

// how to know to use recursion:  prompt is recursive --> array contains arrays
// product sum = sum of all elements in array * depth

function productSum(array, depth = 1) {
    let sum = 0;
    for (const ele of array) {
        if (Array.isArray(ele)) {
            sum += productSum(ele, depth + 1)
        }
        else {
            sum += ele;
        }
    }
    return sum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
