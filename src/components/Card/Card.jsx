
import './Card.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export const Card = ({product,  deleteProduct}) =>{
    function chooseColor(category){
        if (category === "men's clothing"){
            return (<div className='category-container-blue'> 
            <h4>{category}</h4>
        </div>)
        }
        else if  (category === "jewelery"){
            return (<div className='category-container-golden'> 
            <h4>{category}</h4>
        </div>)
        }
        else if  (category === "electronics"){
            return (<div className='category-container-red'> 
            <h4>{category}</h4>
        </div>)
        }
    }
   
    return(
    
        <div className='card'>
             
            <div className = 'title-container'>  
                <h2>{product.title}</h2>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon 
                    onClick = {() => deleteProduct(product.id)}
                    icon={faTrash}
                    size = 'lg'
                    style = {{
                        color:'#FF5353', cursor: 'pointer'
                    }}
                
                />
            </div>
            <div className='img-container'> 
            {chooseColor(product.category)}
                <img src = {product.image} />
            </div>
            <h2 className='price'>{product.price}$</h2>   
            <div className = 'description-container'>  
                <p>{product.description}</p>
            </div>
            <div className = 'rating-container'> 
                {product.rating.rate === '0'? <h3 className = 'rating-left'>No rating</h3> :
                <h3 className = 'rating-left'> {product.rating.rate}&nbsp;<FontAwesomeIcon icon={faStar} 
                style = {{color: '#FFCD60'}}/></h3>
                }
                {
                    (product.rating.count === '' || product.rating.count === 0 )? 
                      <h3 className = 'rating-right'>No items in stock </h3>:
                    <h3 className = 'rating-right'>in stock {product.rating.count} items  </h3>
                }
             
            </div>
            
        </div>
     )
}