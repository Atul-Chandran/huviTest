// ****** Importing required files ******
import React, { useState,useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// **************************************

// ****** Importing required files ******
import App from '../App';
import '../Styles/products.styles.css'
// **************************************


// ****** Back end URLs ******
const FETCH_JOBS_BY_EMAIL_URL = "http://localhost:3002/productList/division/";
// ***************************


// Redirects to the home page on button click
function redirectToHomePage(divisionName){
    ReactDOM.render(
      <App/>,
    document.getElementById('root')
  ); 
}

const ProductList = ({ division }) => {

  const [valueExists,setValueExists] = useState(true);
  const [dataValues,setDataValues] = useState([]);

  var values = [];

  useEffect(() => {
    axios.get(FETCH_JOBS_BY_EMAIL_URL + division).then(jsonResponse => {
        if(jsonResponse.data.data.length === 0){
            setValueExists(false);
        }
        else{
            setDataValues(jsonResponse.data.data);
        }

      });    
  }, []);
  return (
    <div>
      <h1><center><u>Product List</u></center></h1>

      {
        valueExists ? 
          <div>
            <Button id="homeReturn" variant="primary" size="lg" onClick = {redirectToHomePage}>
                  Return to home screen
        </Button>{' '}

        <br/><br/><br/>
        <table>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Product ID</th>
              <th>Product Title</th>
              <th>Product Price</th>
            </tr> 
          </thead>
          {dataValues.length > 0 ?
              dataValues.map((data, index) => (
                  <tbody>
                      <td>{index + 1}</td>
                      <td>{data.product_id}</td>
                      <td>{data.title}</td>
                      <td>{data.sale_price}</td>
                  </tbody>
              ))
                : ""}
        </table>
        </div>: 
        <div>
          <p>No products available</p>
        </div>
      }

     
    </div>

  );
};

export default ProductList;
