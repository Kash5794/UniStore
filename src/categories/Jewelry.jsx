import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../components/Provider'
import {MdOutlineBookmarkAdded} from 'react-icons/md'
import { createApi } from '../components/Provider'
import { Alert } from 'react-bootstrap'

export const Jewelry = () => {
    const {searchButtonClick,homeClick,cart,setCart,selectProduct}= useGlobalContext()
    const [jewelery, setJewelery] = useState([])
    const [visibleAlert, setAlertVisible] = useState(false)
    const [productId, setProductId] =useState()


    const handleCartSelection = (item)=>{
        setCart([...cart,item])
        setProductId(item.id)
        setAlertVisible(true)
            setTimeout(() => { 
                setAlertVisible(false)
            }, 2000);
        }





    useEffect(()=>{
        const fetchApi = async ()=>{
    
            try {
                const response= await createApi.get('/products/category/jewelery')
              
                setJewelery(response.data)
            } catch (error) {
                //console.log(error)
            }
        }      
    fetchApi()
    },[])

    
      return (

        <main className='container'>
        
        <div className='row'>
    {jewelery.map((productData)=>{
        return(
    
            <div className='col' key={productData.id}>
               {productData.id==productId && <Alert show={visibleAlert} variant="success"  style={{width:'10rem',position:'absolute',padding:1}}>
    Added to cart</Alert>}
                <div className='section'>
               
                <img src={productData.image} alt='product' onClick={()=>selectProduct(productData)}/>
                <div className='price-cart' >
                <p style={{fontWeight:'700'}}>${productData.price}</p>
                <button className='bookmarkButton'><MdOutlineBookmarkAdded size={30} color='#034f84' onClick={()=>handleCartSelection(productData)}/></button>
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
