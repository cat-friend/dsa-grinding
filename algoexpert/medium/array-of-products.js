// suboptimal solution:  O(n^2) time complexity

// function arrayOfProducts(array) {
//     const productArray = [];

//     for (let i = 0; i < array.length; i++) {
//         let product = 1;
//         for (let j = 0; j < array.length; j++) {
//             if (j === i) { continue }
//             else {
//                 product *= array[j];
//             }
//         }
//         productArray.push(product);
//     }
//     return productArray
// }

// optimal:  O(n) time complexity, space complexity
function arrayOfProducts(array) {
    const productArray = new Array(array.length).fill(1);
    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        productArray[i] = leftRunningProduct
        leftRunningProduct *= array[i]
    }

    let rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        productArray[i] *= rightRunningProduct;
        rightRunningProduct *= array[i]
    }
    return productArray

}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
