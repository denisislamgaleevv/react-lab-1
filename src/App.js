import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { useState } from 'react';
import { AddCardPage } from './components/AddCardPage/AddCardPage';
import {myProducts} from '../src/files/products.js'
function App() {
  const [products, setProducts] = useState(myProducts)
  function deleteProduct(productId){
    setProducts(products.filter((product)=> product.id !== productId))
  }
  function appendProduct(newProduct){
    setProducts([...products, newProduct])
  }
  return (
    <div className="App">
      <AddCardPage appendProduct = {appendProduct} products = {products}/>
      <ProductList products = {products} deleteProduct = {deleteProduct}/>
    </div>
  );
}

export default App;
