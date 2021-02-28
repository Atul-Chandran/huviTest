const http = require('http');
const app = require('express')();
const configDetails = require('./config').configDetails;


const productController = require('./Controllers/fetchProducts.controller').productDetails;


let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

app.get('/productList/division/:division',productController.fetchProductDetails);

server.listen(configDetails.environmentDetails.port, configDetails.environmentDetails.hostName, () => {
  console.log(`Server running at http://${configDetails.environmentDetails.hostName}:${configDetails.environmentDetails.port}/`);
});