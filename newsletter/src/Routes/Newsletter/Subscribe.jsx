import React, {useState} from 'react';
import './sendgrid'

function Subscribe() {
    // Handles the data inputted into the form
    const [SgEmail, setEmail] = useState(0)
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className="newsletter">
            <h1> This Is Our Newsletter </h1>
            <form>
                <label> SIGN UP FOR OUR DAILY INSIDER! <label/> <br></br>
                    <br></br>
                    <input name="SgEmail" placeholder="Enter Email" required="required"/>
                    <button class="newsletterButton" type="submit" onSubmit={handleEmail}>Submit</button>
                    <br></br>
                    <h1>Thanks for Signing Up</h1>
                </label>
            </form>
        </div>
    )
}

export default Subscribe;