// Importing built in modules
const MongoClient = require('mongodb').MongoClient;

// Importing code fragments
const configurationDetails = require('../config').configDetails;
const dbConfigDetails = configurationDetails.databaseDetails;
const collectionName = "products";

// Service functions
const productService = require('../Services/products.service').productService;

// Fetches user details
function fetchProductDetails(request,response){
    const requestParameters = request.params;
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
            if(productDivision === 1){
                let northIndianProducts = productService.fetchNorthIndianProducts(result);
                response.json({
                    status:200,
                    message:"North Indian products fetched successfully",
                    data: northIndianProducts
                });

            }
            else if(productDivision === 2){
                let southIndianProducts = productService.fetchSouthIndianProducts(result);
                response.json({
                    status:200,
                    message:"South Indian products fetched successfully",
                    data: southIndianProducts
                });
            }
        });
    });
    
}

exports.productDetails = {
    fetchProductDetails
}