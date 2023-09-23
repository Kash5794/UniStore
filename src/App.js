import Header from './components/Header';
import Section from './components/Section';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Men } from './categories/Men';
import { Women } from './categories/Women';
import { Jewelry } from './categories/Jewelry';
import { Electronics } from './categories/Electronics';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { ForgotPassword } from './components/ForgotPassword';
import { useGlobalContext } from './components/Provider';
import { Modal } from './components/Modal';
import Cart from './components/cart';

function App() {

const {showModal} = useGlobalContext()
 
  return (
    <main >
          {showModal && <Modal/>}

      <BrowserRouter>
      <Header/>
      
      <Routes>


    <Route path="/signup" Component={Signup}/>
    <Route path="/login" Component={Login}/>



    <Route path="/" element={<Section/>}/>
    <Route path='forgot-password' Component={ForgotPassword}/>
    <Route path="/men" element={<Men/>}/>
    <Route path="/women" element={<Women/>}/>
    <Route path="/jewelery" element={<Jewelry/>}/>
    <Route path="/electronics" element={<Electronics/>}/>

    <Route path="/cart" element={<Cart/>}/> 
      </Routes>
    
      </BrowserRouter>
    
      
    </main>
  );
}

export default App;
