import React, {useState, } from 'react'
import {auth, googleAuthProvider} from '../firebase'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from 'react-redux'
function Login({history}) {
    const dispatch = useDispatch()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await auth.signInWithEmailAndPassword(email. password)
            const {user} = result
            const IdTokenResult = await user.getIdTokenResult()

            dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                    email : user.email,
                    token : IdTokenResult,
                },
            });
            history.push('/');
        }catch(error) {
            toast.error(error.message)

        }
             
    }
    const googlelogin = async() => {
        auth.signInWithPopup(googleAuthProvider)
        .then(async(result) => {
            const {user} = result;
            const idTokenResult = await user.getIdTokenResult();
            dispatch({
                type : "LOGGED_IN_USER",
                payload : {
                    email : user.email,
                    token: idTokenResult,
                },
            });
            history.push("/");

        })
         .catch((error) => {
             toast.error(error.message);

         });
    }
    const loginform = () => <form onSubmit={handlesubmit}>
        <input type="email" 
        className="form-control" 
        value={email} 
        placeholder= "your email"
        onChange={(e) => setemail(e.target.value)}
        autoFocus
         />
         <input type="password" 
        className="form-control" 
        value={password} 
        onChange={(e) => setpassword(e.target.value)}
        placeholder="your password"
         />
         <button type="submit" onClick={handlesubmit} className="btn btn-raised">Login with Email/Password</button>
    </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Login</h4>
                    <ToastContainer />
                    {loginform()}
                    <button type="submit" onClick={googlelogin} className="btn btn-raised">Login with google</button>
                </div>
            </div>
           
        </div>
    )
}

export default Login
