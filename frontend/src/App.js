// ****** Importing required packages ******
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// *****************************************

// ****** Importing required files ******
import './App.css';
import ProductList from './Controllers/fetchProducts.controller';
// **************************************

// Redirects to the product page on button click
function redirectToProductsPage(divisionName){
    ReactDOM.render(
      <ProductList division = {divisionName} />,
    document.getElementById('root')
  ); 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Which area's products do you wish to see?</p>
        <Button id="north" variant="primary" size="lg" onClick = {() => redirectToProductsPage(1)}>
                North
        </Button>{' '}
        <Button id="south" variant="primary" size="lg" onClick = {() => redirectToProductsPage(2)}>
                South
        </Button>{' '} 
      </header>
    </div>
  );
}

export default App;
