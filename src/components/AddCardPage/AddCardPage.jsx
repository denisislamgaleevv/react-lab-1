
import './AddCardPage.css';
import React, { useState } from 'react';
import { ImageUploader } from '../ImageUploader/ImageUploader';

 
export const AddCardPage = ({appendProduct, products}) =>{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState("men's clothing"); //костыль, нужен, если пользователь не будет выбирать категорию
    const [description, setDescription] = useState('');
    const [count, setCount] = useState('');
    const [image, setImage] = useState('')
 
    const addNewUser = (event) =>{
        event.preventDefault();
        
        const newProduct ={
            id: products.length+1, 
            title: title, 
            price: price, 
            category: category, 
            description: description, 
            rating: {rate: '0', count: count}, 
            image: image, 
        }
        console.log('product', newProduct)
       appendProduct(newProduct)
    }
    return(
    <div className='add-card-page-wrapper'>
        <div className='add-card-page'>
          
            <div className='add-card-page-left'>
                <h3>Title: <input className='add-input' 
                value = {title} 
                onChange={(e)=>setTitle(e.target.value)}
                required="required" 
                ></input></h3>
                <h3>Price: <input className='add-input'
                 value = {price} 
                 onChange={(e)=>setPrice(e.target.value)}
                 ></input></h3>

                <h3>Category: <select className = 'select-category' 
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                on
                >
                    <option   value="men's clothing">men's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select></h3>
                <h3 className='desc-h3'>Description:  <textarea className='desc-textarea'
                  value = {description} 
                  onChange={(e)=>setDescription(e.target.value)}
                ></textarea></h3>
               
                
                <h3>Count: <input className='add-input'
                  value = {count} 
                  onChange={(e)=>setCount(e.target.value)}
                ></input></h3>
                <div className='add-btn-wrapper'>  
                    <button 
                    className='add-btn'
                    onClick = {(event) =>addNewUser(event)}
                    >Add card</button>
                </div>
            </div>
            <div className='add-card-page-right'>
                <h3>Image:   <ImageUploader image = {image} setImage = {setImage}/> </h3>
            </div>
        </div>
    </div>
    )
}