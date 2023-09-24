import React, {useState,useEffect} from 'react'
import { useGlobalContext } from './Provider'
import {IoMdRemoveCircle} from 'react-icons/io'
import card from '../images/card.jpg'
const Cart = () => {

let {cart} = useGlobalContext()
let storageCart 
useEffect(()=>{
storageCart=JSON.parse(localStorage.getItem('cart'))
},[cart])

if(storageCart){
    cart =storageCart
}
  return (
    <main className='container'>
        <p style={{fontSize:'10px'}}>Sign-in to your account to sync your transaction across all your devices</p>
     <h4>Shopping Cart</h4>   
    <div className='payment-checkout text-white bg-secondary px-5'>
        <img className='payment-image' src={card} alt='accepted payment services'/>
        <button className='bg-danger m-0 p-2 border-0 btn text-white'>Checkout</button>
        
        </div>
        {cart.map((productData)=>{
        return <div className='section'>
        <div className='cart-item-container'>
        <img src={productData.image} alt='product'/>
        <div>
            <h6>{productData.title}</h6>
            <p style={{color:'red'}}>${productData.price}</p>
            <label for="quantity">Qty:</label>

<select id="quantity">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
        </div>
        </div>
        <IoMdRemoveCircle size={25} color='#800000'/>
        <hr></hr>

        </div>
        })}


        
        
        </main>
  )
}

export default Cart