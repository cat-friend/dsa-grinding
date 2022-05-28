function arrayOfProducts(array) {
    const productArray = [];

    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (j === i) { continue }
            else {
                product *= array[j];
            }
        }
        productArray.push(product);
    }
    return productArray
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
