import React, {useState} from 'react';
// Setting up the API Key
const SendGridMail = require("@sendgrid/mail")
SendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

// Message Object
const msg = {
    to: 'dell_jones@outlook.com', // Change to your recipient
    from: 'rmannekejones@deakin.edu.au', // Change to your verified sender
    subject: 'Send Grid Email',
    text: 'Thanks for subscribing to Dev@Deakin.edu.au',
    html: '<h1><strong>Thanks for Subscribing!</strong> Hope you have a fantastic day</h1>',
}
SendGridMail
    .send(msg)
    .then(() => {
        console.log('Email sent to')
    })
    .catch((error) => {
        console.error(error)
    })


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