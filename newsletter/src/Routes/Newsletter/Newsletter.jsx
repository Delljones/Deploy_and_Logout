import React from "react";

function Newsletter() {
    return (
        <div className="newsletter">
            <h1> This is Newsletter </h1>
            <h2>Subscribe to Our Website</h2>
            <form>
                <label> SIGN UP FOR OUR DAILY INSIDER! <label/>
                    <input name="email" placeholder="Email" required="required"/>
                    <button type="submit">Submit</button>
                </label>
            </form>
        </div>
    )
}

export default Newsletter;