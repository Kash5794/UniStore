import React, {useEffect, useState} from 'react'
import { useGlobalContext } from './Provider'
import {MdOutlineBookmarkAdded} from 'react-icons/md'
import { Alert } from 'react-bootstrap'
//id, title, price,image,rating
const Section = () => {

const {searchButtonClick,homeClick,cart,setCart,selectProduct,product}= useGlobalContext()
const [visibleAlert, setAlertVisible] = useState(false)
const [productId, setProductId] =useState()

//let allProduct=JSON.parse(localStorage.getItem('product'))
let filterProduct=JSON.parse(localStorage.getItem('filter'))

let allProduct=product
const handleCartSelection = (item)=>{
setCart([...cart,item])
setProductId(item.id)
setAlertVisible(true)
    setTimeout(() => { 
        setAlertVisible(false)
    }, 2000);
}

  useEffect(()=>{

   allProduct=JSON.parse(localStorage.getItem('product'))
  },[searchButtonClick])

useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart))
},[cart])


const renderProduct=(data)=>{

  return (
    <main className='container'>
    
    <div className='row'>


{data.map((productData)=>{
    return(

        <div className='col' key={productData.id}>
            {productData.id==productId && <Alert show={visibleAlert} variant="success"  style={{width:'10rem',position:'absolute',padding:1}}>
    Added to cart</Alert>}
            <div className='section'>
           
            <img src={productData.image} alt='product' onClick={()=>selectProduct(productData)}/>
            
            <div className='price-cart' >
            <p style={{fontWeight:'700'}}>${productData.price}</p>
            <button className='bookmarkButton' ><MdOutlineBookmarkAdded size={30} color='#034f84' onClick={()=>handleCartSelection(productData)}/></button>
            
            </div>
            
            </div>
            <div style={{marginBottom:'2rem'}}>{productData.title}</div>
            
        </div>
    )
 
})}
    </div>  
    </main>
  )
}

return(
homeClick? renderProduct(allProduct) :renderProduct(filterProduct)

)

}

export default Section