// Importing built in modules
const MongoClient = require('mongodb').MongoClient;

// Importing code fragments
const configurationDetails = require('../config').configDetails;
const dbConfigDetails = configurationDetails.databaseDetails;
const collectionName = "products";

// Service functions
const productService = require('../Services/products.service').productService;

// Fetches product details
function fetchProductDetails(request,response){

    // Fetches the request parameters (here, division)
    const requestParameters = request.params;

    // Specifies the country division, 1 = north and 2 = south
    const productDivision = parseInt(requestParameters.division);

    MongoClient.connect(dbConfigDetails.mongoDBUrl, function(err, db) {
        var dbo = db.db(dbConfigDetails.dbName);
        dbo.collection(collectionName).find(
            {},
            {
                projection: {
                    "_id": 0,
                    "product_id": 1,
                    "title": 1,
                    "product_variant": 1,
                    "sale_price": 1
                }
            }
        ).toArray(async function(err, result) {

            // If the path parameter for division is 1, north Indian related products are fetched
            if(productDivision === 1){
                let northIndianProducts = productService.fetchNorthIndianProducts(result);
                response.json({
                    status:200,
                    message:"North Indian products fetched successfully",
                    data: northIndianProducts
                });
            }

            // Else, if path parameter for division is 2, south Indian related products are fetched
            else if(productDivision === 2){
                let southIndianProducts = productService.fetchSouthIndianProducts(result);
                response.json({
                    status:200,
                    message:"South Indian products fetched successfully",
                    data: southIndianProducts
                });
            }

            // Only 1 and 2 are allowed as division in path parameters
            else{
                response.json({
                    status: 403,
                    message: "Invalid division mentioned",
                    data: {}
                })
            }
        });
    });
    
}

exports.productDetails = {
    fetchProductDetails
}