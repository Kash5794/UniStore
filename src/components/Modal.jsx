import React, {useState, useEffect} from 'react'
import { useGlobalContext } from './Provider'
import {FcRating} from 'react-icons/fc'
import {RiStarSFill} from 'react-icons/ri'

export const Modal = () => {
const {selectedProduct, closeModal}= useGlobalContext()


const renderRating = (selectedProduct)=>{
    let comp=[]
    for(let i =0;i<selectedProduct.rating.rate; i++){
        comp.push(<p style={{color:'orange'}} key={i}><RiStarSFill /></p>)
    }
    return comp
}

const rating = renderRating(selectedProduct)

  return (
    <aside className='modal-overlay'> 
      <div className='modal-container'>
        <div className='img-container'>
        <img src={selectedProduct.image} alt= {selectedProduct.title} className='modal-img'/>
        </div>
       
    <div className='modal-content'>
      <h5>{selectedProduct.title}</h5>

      <span style={{color:'red',display:'flex'}}> <p>Price:</p> <p style={{color:'red',marginLeft:'10px'}}>${selectedProduct.price}</p> 
    </span>

    <div style={{borderBottom:'1px solid grey',marginBottom:'10px', padding:'5px', display:'grid',placeItems:'center'}}><button className='btn btn-danger'>Add to cart</button></div>
      <h6>Descriptions:</h6>
      <p>{selectedProduct.description}</p>

      <span style={{display:'flex'}}><p style={{fontWeight:'700',marginRight:'10px'}}>Number of items:</p><p>{selectedProduct.rating.count}</p> 
    </span>
     
    <span style={{display:'flex'}}><p style={{fontWeight:'700',marginRight:'10px'}}>Category:</p><p>{selectedProduct.category}</p> 
    </span> 

    <span style={{display:'flex'}}>
        <p style={{fontWeight:'700',marginRight:'10px'}}>Ratings:</p>
    
    {rating.map((item)=>{
return item
    })}
    
    </span> 

      <button className='btn btn-danger'  onClick={closeModal}>close</button>
    </div>
        
      
      </div>
     </aside>
  )
}
