function fetchNorthIndianProducts(productList){
    let northIndianProducts = [];
    let productIterator = 0;

    while(productIterator < productList.length){
        productAsciiCharacter = productList[productIterator].title.toUpperCase().charCodeAt();

        if(productAsciiCharacter >= 65 && productAsciiCharacter <= 77 ){
            northIndianProducts.push(productList[productIterator]);
        }
        productIterator ++;
    }

    return northIndianProducts;
}

function fetchSouthIndianProducts(productList){
    let southIndianProducts = [];
    let productIterator = 0;

    while(productIterator < productList.length){
        productAsciiCharacter = productList[productIterator].title.toUpperCase().charCodeAt();

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