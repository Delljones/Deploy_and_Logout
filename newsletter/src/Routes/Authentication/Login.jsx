import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './Login.css'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../../Utils/firebase';
import './Signup'

//const cors =require ("cors")

function Login(message) {
    const auth = getAuth(app);
    const [email, getEmail] = useState("")
    const [password, getPassword] = useState("")
    const navigate = useNavigate()

    const logins = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user);
                // Ability to navigate after the sign in is auth
                navigate("/profile")
            }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        })
    }


    return (
        <div>
            <h1> Log In </h1>
            <div className="form">
                <Link to='/signup' class="signup" type="submit">Sign Up</Link>
                <br/>
                <label>Enter Your Email</label>
                <input type="email"
                       id="search"
                       className="form-control"
                       name="email"
                       placeholder="Enter Email"
                       required="required"
                       onChange={(e) => getEmail(e.target.value)}/><br/>
                <label>Enter your Password</label>
                <input type="password"
                       id="search"
                       className="form-control"
                       name="password"
                       placeholder="Enter Password"
                       required="required"
                       onChange={(e) => getPassword(e.target.value)}/><br/><br/>
                <div className="buttons">
                    <button class="login" onClick={logins}>Log In</button>
                </div>
            </div>
            <div className="newsletter">
                <h1> This Is Our Newsletter </h1>
                <form>
                    <label> SIGN UP FOR OUR DAILY INSIDER! <label/> <br></br>
                        <br></br>
                        <input type="email"
                               name='email'
                               className="Enter_Email"
                               placeholder="Type your email"
                        />
                        <button
                            type="submit">
                            Submit
                        </button>
                        <br></br>
                        <h1>Thanks for Signing Up!</h1>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Login