import React, {useState} from 'react'
import {auth} from '../firebase'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {
    const [email, setemail] = useState("")
    const handlesubmit = async(e) => {
        e.preventDefault()
        const config = {
            url : 'http://localhost:3000/register/complete',
            handleCodeInApp : true
        }  
        await auth.sendSignInLinkToEmail(email, config)
        toast.success(`Email is sent to ${email}`);
        window.localStorage.setItem('emailForRegistration', email)
        setemail("");      
    }

    const registerform = () => <form onSubmit={handlesubmit}>
        <input type="email" 
        className="form-control" 
        value={email} 
        onChange={(e) => setemail(e.target.value)}
        placeholder="your email"
        autoFocus
         />
         <button type="submit" className="btn btn-raised">Register</button>
    </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    <ToastContainer />
                    {registerform()}
                </div>
            </div>
           
        </div>
    )
}

export default Register
