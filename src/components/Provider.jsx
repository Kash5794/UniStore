import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {auth} from '../firebase'


//const TOKEN = "cjgd7c9r01qh977elsvgcjgd7c9r01qh977elt00"

export const createApi = axios.create({
    baseURL:"https://fakestoreapi.com"
    
    })

const AppContext = React.createContext()

const Provider = ({children}) => {

//Firebase Authentication Setup
const [currentUser, setCurrentUser] = useState()
const [loading, setLoading] = useState(true)

const signup= (email, password)=>{
  
return auth.createUserWithEmailAndPassword(email,password) 
}

const login = (email, password) =>{
  return auth.signInWithEmailAndPassword(email, password)
}

const logout = () =>{
  return auth.signOut()
}
const resetPassword = (email) =>{

return auth.sendPasswordResetEmail(email)
}


useEffect(()=>{
const unsubscribe = auth.onAuthStateChanged(user=>{
  
  setCurrentUser(user)
  setLoading(false)
})

return unsubscribe
},[])


const value ={
  currentUser,
  signup,
  login,
  logout,
  resetPassword
}


//selected product functionality
const [selectedProduct, setSelectedProduct] = useState()
const [showModal, setShowModal] = useState(false)
const selectProduct = (product)=>{
  setSelectedProduct(product)
  setShowModal(true)
}

const closeModal = ()=>{
  console.log('closeModal')
  setShowModal(false)
}

//Other functionalities
const [searchButtonClick, setSearchButtonClick] = useState(false) //keep track of search button Click
const [product, setProduct] = useState([])
const[homeClick, setHomeClick] = useState(true)
const [cart, setCart] = useState([])


useEffect(()=>{

const fetchApi = async ()=>{

    try {
        const response= await createApi.get('/products')
      
    setProduct(response.data)
    
    } catch (error) {
        //console.log(error)
    }
    
}

fetchApi()

},[])

useEffect(()=>{ 
 
  if(product.length>0){
    localStorage.setItem('product', JSON.stringify(product))
  }

},[product])


  return (
    <AppContext.Provider value={{product,searchButtonClick, setSearchButtonClick, homeClick, setHomeClick, value,cart,
    setCart, selectedProduct, selectProduct,showModal,closeModal}}> 
        {!loading && children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
  
  }

export default Provider