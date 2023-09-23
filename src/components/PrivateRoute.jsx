import React from 'react'
import {Route, Navigate, Outlet} from 'react-router-dom'
import { useGlobalContext } from './Provider'

export const PrivateRoute = () => {
 const {value} = useGlobalContext()
 const {currentUser} = value 
  
    return currentUser? <Outlet/> :<Navigate to="/login"/>
}
