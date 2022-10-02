import React from "react";
import './signup.css'
import {useState} from "react";
import app from '../../Utils/firebase';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
function Signup() {

    // setting up credentials to login and then popup with an error or success
    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signups = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                alert("You have successfully created an account")
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log('error in login', errorCode);
                if(errorCode.includes("wrong-password")){
                    alert("Incorrect Username or Password - Please try again ")
                }
            });
    }
    return (
        <div className='form'>
            <label>Enter your Name </label>
            <input type="search"
                   id="name"
                   className="form-control"
                   name="name"
                   placeholder="Please Enter Your Name"
                   required="required"/><br/><br/>
            <label>Email</label>
            <input type="email"
                   id="email"
                   className="form-control"
                   name="email"
                   placeholder="Please Enter your Email"
                   required="required"
                   onChange={(e) => setEmail(e.target.value)} /><br/>
            <label>Password</label>
            <input type="password"
                   id="password"
                   className="form-control"
                   name="password"
                   placeholder=" Please Enter Your Password"
                   required="required"
                   onChange={(e) => setPassword(e.target.value)} /><br/>
            <label>Confirm Password</label>
            <input type="password"
                   id="confirmPassword"
                   className="form-control"
                   name="confirm"
                   placeholder="Confirm your Password"
                   required="required"
            />
            <br/><br/><br/>
            <button onClick={signups} type="submit">Create Account</button>
        </div>
    )
}
export default Signup