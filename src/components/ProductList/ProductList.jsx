
import './ProductList.css';
import React from 'react';
 
import { Card } from '../Card/Card';
export const ProductList = ({products, deleteProduct}) =>{
    return(
    <div className='cards'>
        { console.log(products)}
        {products.slice(0).reverse().map((elem)=> //чтобы видеть то, что добавил
           <Card product = {elem}  deleteProduct = {deleteProduct} />
           
        )}
    </div>
    )
}