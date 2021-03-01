// Fetches the north Indian products, i.e. products starting from A to M
function fetchNorthIndianProducts(productList){
    let northIndianProducts = [];
    let productIterator = 0;
    
    // Iterating through the products received from DB
    while(productIterator < productList.length){

        // Converting the first letter to uppercase to maintain consistency
        productAsciiCharacter = productList[productIterator].title.toUpperCase().charCodeAt();

        // Converting the first letter of the product title into ascii character to check the letter range
        if(productAsciiCharacter >= 65 && productAsciiCharacter <= 77 ){
            northIndianProducts.push(productList[productIterator]);
        }
        productIterator ++;
    }

    return northIndianProducts;
}

// Fetches the south Indian products, i.e. products starting from N to Z
function fetchSouthIndianProducts(productList){
    let southIndianProducts = [];
    let productIterator = 0;

    // Iterating through the products received from DB
    while(productIterator < productList.length){

        // Converting the first letter to uppercase to maintain consistency
        productAsciiCharacter = productList[productIterator].title.toUpperCase().charCodeAt();

        // Converting the first letter of the product title into ascii character to check the letter range
        if(productAsciiCharacter > 77 && productAsciiCharacter <= 91 ){
            southIndianProducts.push(productList[productIterator]);
        }
        productIterator ++;
    }

    return southIndianProducts;
}

exports.productService = {
    fetchNorthIndianProducts,
    fetchSouthIndianProducts
}