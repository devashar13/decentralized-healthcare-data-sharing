import React, {useState, useEffect} from 'react'
import {auth} from '../firebase'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from 'react-redux'
function RegisterComplete({history}) {
    const dispatch = useDispatch()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    useEffect(() => {
         setemail(window.localStorage.getItem("emailForRegistration"));

    }, [])
    const handlesubmit = async (e) => {
        e.preventDefault()
        if(!email || !password){
            toast.error("email and password is required");
            return;
        }
        if(password.length < 6){
            toast.error("password must be at least 6 characters long");
            return;
        }
        try{
            const result = await auth.signInWithEmailLink(email, window.location.href); 
            if(result.user.emailVerified) {
                window.localStorage.removeItem("emailForRegistration");
                let user = auth.currentUser
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult()
                // redux store
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: {
                        email : user.email,
                        token : idTokenResult,    },
                });



                history.push('/')

            }
        }catch (error){
            toast.error(error.message);

        }
            
    }

    const completeRegisterform = () => <form onSubmit={handlesubmit}>
        <input type="email" 
        className="form-control" 
        value={email} 
        disabled
         />
         <input type="password" 
        className="form-control" 
        value={password} 
        onChange={(e) => setpassword(e.target.value)}
        placeholder="enter your password"
        autoFocus
         />

         <button type="submit" className="btn btn-raised">Register</button>
    </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>complete registration</h4>
                    <ToastContainer />
                    {completeRegisterform()}
                </div>
            </div>
           
        </div>
    )
}

export default RegisterComplete