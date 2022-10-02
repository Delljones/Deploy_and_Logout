import React from "react";
// using concurrently - https://www.npmjs.com/package/concurrently
//     "server": "nodemon server.js"
// Create two applications side by side
//     "dev": "concurrently \"npm run server\" \"npm start\""

function Newsletter() {
    return (
        <div className="newsletter">
            <h1> This Is Our Newsletter </h1>
            <form>
                <label> SIGN UP FOR OUR DAILY INSIDER! <label/>
                    <input name="email" placeholder="Email" required="required"/>
                    <button type="submit">Submit</button>
                    <br></br>
                    <h1>Thanks for Signing Up</h1>
                </label>
            </form>
        </div>
    )
}
export default Newsletter;