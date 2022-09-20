import React, { useState } from 'react';
import Add from "../Images/addAvatar.png"
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")      
        }  catch (err) {
            setErr(true)
           }
        }
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Logsdon Chat</span>
                <span className='title'>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email'/>
                    <input type="password"placeholder='password' />
                    <input style={{display: "none"}} type="file" id="file" />
                    <label htmlFor='file' >
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
}

export default Login;