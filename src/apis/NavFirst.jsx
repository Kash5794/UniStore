import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../components/Provider';

import { Alert } from 'react-bootstrap';
import { TiShoppingCart } from 'react-icons/ti'
import { MdOutlineAccountCircle } from 'react-icons/md'
import {AiOutlineMenuUnfold} from 'react-icons/ai'


export const NavFirst = () => {

  const [visible, setVisible] =useState()
  const [error, setError] = useState("")
  const { value } = useGlobalContext()
  const { currentUser, logout } = value

const cart =JSON.parse(localStorage.getItem('cart'))
  const handleLogout = async () => {
    setError('')
    try {
      await logout()

    } catch (error) {
      setError(error)
    }
  }

  const handleDisableButton = () => {
    return (
      currentUser ? <button className="dropdown-item" style={{ border: 'none', cursor: 'pointer' }} onClick={handleLogout} >Sign-out</button> :
        <button className="dropdown-item" style={{ border: 'none', cursor: 'pointer' }} onClick={handleLogout} disabled>Sign-out</button>)
  }

//search logic
  const [search, setSearch] = useState('')

  const { setSearchButtonClick, searchButtonClick, setHomeClick } = useGlobalContext()
  let memory = JSON.parse(localStorage.getItem('product'))



  useEffect(() => {
    memory = JSON.parse(localStorage.getItem('product'))

    // console.log(memory)
  }, [search])


  const handleSearch = () => {

    let anotherMemory = []
    if (searchButtonClick) {
      setSearchButtonClick(false)
    }
    else {
      setSearchButtonClick(true)
    }

    if (search.length != 0) {
      memory.map((item) => {
        if (item.title.toLowerCase().match(search) != null) {
          setHomeClick(false)
          anotherMemory.push(item)
        }
      })

      localStorage.setItem('filter', JSON.stringify(anotherMemory))
      setSearch('')
    }


  }

  const hideVisibility=()=>{
    
      setVisible(false)
    

  }
  
  const showVisibility=()=>{
    
    if(visible){
      setVisible(false)
    }
   else{
    setVisible(true)
   } 
  

}
console.log(visible)
  return (

    <div className='parent-container'>

<nav style={{position:'fixed',width:'100%',top:0}} className="navbar navbar-expand-sm navbar-dark bg-dark" >
      <div className="container-fluid p-2 ">

        
          
        <AiOutlineMenuUnfold onClick={showVisibility} className='menuButton' size={30} color='white'/>
       

        <Link onClick={() => setHomeClick(true)} to='/' className="navbar-brand">Akube</Link>


          <ul className="navbar-nav me-auto horizontalHomeMenu ">
            <li className="nav-item">
              <Link onClick={() => setHomeClick(true)} to='/' className="nav-link " >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/signup'>Sign-up</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help</a>
            </li>
          </ul>

         

          <div className='d-flex justify-content-end' >
            {error && <Alert variant='danger'>{error}</Alert>}
            <div style={{ marginRight: '10px', color: 'red' }}><Link to="/cart"><TiShoppingCart size={30} /></Link>{cart.length > 0 && cart.length}</div>
            <div className='dropdown' style={{ marginRight: '3rem' }} >
              <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: 'none' }} ><MdOutlineAccountCircle size={30} color={'white'} /></button>

              <ul className='dropdown-menu' >
                <li> <Link to='/login' className='dropdown-item' style={{ borderBottom: '2px solid blue', marginBottom: '10px' }}>Sign-in</Link> </li>
                <li >{handleDisableButton()}</li>
                <li><a className="dropdown-item" href="#">MyAccount</a></li>
              </ul>

            </div>
          </div>





      </div>

    </nav>

 {/**Side nav bar containing menus. Hidden by default except on smaller devices transform: translateX(-12rem);
		transition: transform 300ms ease-out; */}
 <div className='side-bar bg-dark' style={{visibility:visible?"visible":"hidden",width:'80%'}}  onClick={hideVisibility} >
            <ul className="navbar-nav me-auto sideBarHomeMenu ">
              <li className="nav-item">
                <Link onClick={() => setHomeClick(true)} to='/' className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/signup'>Sign-up</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
            {/**starting category menu. This menu is a duplicate of the horizontal cat menu*/}
           
           <div style={{borderTop:'2px solid white',marginTop:'2.5rem',color:'white'}}>
            <h4>Category</h4>
           </div>
            <ul className="navbar-nav nav-design">
              <li className="nav-item" >
                <Link className='nav-link' to='/men'>Men's clothing</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/women'>Women's clothing</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/jewelery'>Jewelery</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/electronics'>Electronics</Link>
              </li>
            </ul>
          </div>
{/**End of Side nav bar containing menus. Hidden by default except on smaller devices*/}


    <form className="d-flex" style={{marginTop:'80px'}}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="form-control me-2 p-1" type="text" placeholder="Search" />
            <button className="btn btn-primary p-1" type="button" onClick={handleSearch}>Search</button>
          </form>









    </div>
    
  )
}
