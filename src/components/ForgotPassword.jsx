import React,{useRef,useState,useEffect} from 'react'
import { useGlobalContext } from './Provider'
import { Alert } from 'react-bootstrap'
import { Link} from 'react-router-dom'

export const ForgotPassword= () => {

    const emailRef = useRef()
 
    const {value}=useGlobalContext()
    const [error, setError] = useState('')
    const [message, setMessage] =useState('')
    const [loading, setLoading] = useState(false)
    const {resetPassword} =value
   
    
const handleSubmit= async (e)=>{
e.preventDefault()

try {
    setError('')
    setMessage('')
    setLoading(true)
    await resetPassword(emailRef.current.value)
    setMessage('Password reset link sent to your email')
} catch (error) {
    setError('Failed to reset password')
}
setLoading(false)
}

  return (
    < div className='container d-flex 
    justify-content-center' style={{minHeight:'100vh'}}>

<div className='w-100' style={{maxWidth:'400px'}}>
<div className='card'>
   
<div className='card-body'>
    <h2 className='text-center mb-4'>Password Reset</h2>
    {error && <Alert variant='danger'>{error}</Alert>}
    {message && <Alert variant='success'>{message}</Alert>}
    <form onSubmit={handleSubmit}>

        <div className='form-group' id='email'>
        <label className='form-label'>Email</label>
        <input type='email' required className='form-control' ref={emailRef}/>
        </div>

        <button disabled={loading} type='submit' className='w-100 btn btn-primary mt-3'>Reset Password</button>
    </form>

    <div className='w-100 text-center mt-2'>
         <Link to="/login"> Login</Link> 
    </div>
</div>

   </div>
</div>



    </div>
    
  )
}
