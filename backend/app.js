const http = require('http');
const app = require('express')();
const configDetails = require('./config').configDetails;

// ***** Controller variables ******
const productController = require('./Controllers/fetchProducts.controller').productDetails;
// ***************

const server = http.createServer(app);

// ***** Get requests ***** 
app.get('/productList/division/:division',productController.fetchProductDetails);
// ***************

server.listen(configDetails.environmentDetails.port, configDetails.environmentDetails.hostName, () => {
  console.log(`Server running at http://${configDetails.environmentDetails.hostName}:${configDetails.environmentDetails.port}/`);
});