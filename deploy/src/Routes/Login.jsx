import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Login.css'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from './firebase';
import './Signup'
function Login() {

    const auth = getAuth(app);
    const [email, getEmail] = useState("")
    const [password, getPassword] = useState("")
    const logins = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user);
                alert("This user has signed in")
            }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    return (
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
                   onChange={(e) => getEmail(e.target.value)}/>
            <br/>
            <label>Enter your Password</label>
            <input type="password"
                   id="search"
                   className="form-control"
                   name="password"
                   placeholder="Enter Password"
                   required="required"
                   onChange={(e) => getPassword(e.target.value)}/>
            <br/>
            <br/>
            <button className="login" onClick={logins}>Log In</button>
        </div>
    )
}

export default Login