import React, { useState, useEffect } from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import {MdOutlineAccountCircle} from 'react-icons/md'
import '../App.css';
import {Link} from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useGlobalContext } from '../components/Provider';
const NavSecond = () => {
const [error, setError] = useState("")



  return (
    <nav  className="navbar navbar-expand-sm  border-bottom border-dark border-1 horizontalHomeMenu" >
    <div className="container-fluid p-2" >
        
        <ul className="navbar-nav nav-design">
          <li className="nav-item" >
          <Link to='/men'>Men's clothing</Link>
          </li>
          <li className="nav-item">
          <Link to='/women'>Women's clothing</Link>
          </li>
          <li className="nav-item">
          <Link to='/jewelery'>Jewelery</Link>
          </li>
          <li className="nav-item">
          <Link to='/electronics'>Electronics</Link>
          </li>
        </ul>


       
    </div>
   


  
  </nav>       
  )
}

export default NavSecond