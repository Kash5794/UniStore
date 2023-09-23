import React,{useRef,useState,useEffect} from 'react'
import { useGlobalContext } from './Provider'
import { Alert } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'

export const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {value}=useGlobalContext()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const {login} =value
    const navigate = useNavigate()
const handleSubmit= async (e)=>{
e.preventDefault()

try {
    
    setError('')
    setLoading(true)
    await login(emailRef.current.value, passwordRef.current.value)
    navigate("/")
} catch (error) {
    setError('Failed to sign in')
}
setLoading(false)
}

  return (
    <main className="">
    < div  className='container d-flex 
    justify-content-center' style={{minHeight:'100vh'}}>

<div className='w-100' style={{maxWidth:'400px'}}>
<div className='card'>
   
<div className='card-body'>
    <h2 className='text-center mb-4'>Log in </h2>
    {error && <Alert variant='danger'>{error}</Alert>}

    <form onSubmit={handleSubmit}>

        <div className='form-group' id='email'>
        <label className='form-label'>Email</label>
        <input type='email' required className='form-control' ref={emailRef}/>
        </div>

        <div className='form-group' id='password'>
        <label className='form-label'>Password</label>
        <input type='password' required className='form-control' ref={passwordRef}/>
        </div>

        <button disabled={loading} type='submit' className='w-100 btn btn-primary mt-3'>Log in </button>
    </form>

    <div className='w-100 text-center mt-2'>
         <Link to="/forgot-password"> Forgot Password?</Link> 
    </div>
</div>

   </div>

     <div className='w-100 text-center mt-2'>
         Not have an account? <Link to="/signup">Sign up</Link> 
    </div>
</div>



    </div>
    </main>
  )
}
