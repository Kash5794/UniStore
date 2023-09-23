import React,{useRef,useState,useEffect} from 'react'
import { useGlobalContext } from './Provider'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {value}=useGlobalContext()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const {signup,currentUser} =value

const handleSubmit= async (e)=>{
e.preventDefault()

if(passwordConfirmRef.current.value !==passwordRef.current.value){
 return setError('Passwords do not match')
}

try {
    setError('')
    setLoading(true)
    await signup(emailRef.current.value, passwordRef.current.value)
} catch (error) {
    setError('Failed to create an account')
}

setLoading(false)
}
console.log(currentUser)
  return (
    < div className='container d-flex
    justify-content-center' style={{minHeight:'100vh'}}>

<div className='w-100' style={{maxWidth:'400px'}}>
<div className='card'>
   
<div className='card-body'>
    <h2 className='text-center mb-4'>Sign Up</h2>
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

        <div className='form-group' id='password=confirm'>
        <label className='form-label'>Confirm password</label>
        <input type='password' required className='form-control' ref={passwordConfirmRef}/>
        </div>

        <button disabled={loading} type='submit' className='w-100 btn btn-primary mt-3'>Sign Up</button>
    </form>
</div>

   </div>

     <div className='w-100 text-center mt-2'>
         Already have an account? <Link to='/login'>Log in</Link>
    </div>
</div>



    </div>
    
  )
}
