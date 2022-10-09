import React, {useState} from 'react';
import SendGridMail from "@sendgrid/mail";
function Subscribe() {
    // Handles the data inputted into the form
    const [SgEmail, setSgEmail] = useState("")
    console.log(SgEmail)
    // Handles when the submit button is pressed
    const handleSubmit = async () => {
        await fetch('http://localhost:5000', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            SgEmail: SgEmail
        })
            .then(response => response.json())
            .then (data => JSON.parse(data))
            .catch(err=> {
                console.log("Error: " + err)
            })

        console.log("handle submit is happening ")

        SendGridMail.setApiKey('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');
        const msg = {
            to: SgEmail, // Change to your recipient
            from: 'rmannekejones@deakin.edu.au',
            subject: 'Send Grid Email',
            text: 'Thanks for subscribing to Dev@Deakin.edu.au',
            html: '<h1><strong>Thanks for Subscribing!</strong> Hope you have a fantastic day</h1>',
            // track this in the log as it appears
        }
        console.log('Inside function is  ', SgEmail)
        SendGridMail
            .send(msg)
            .then(() => {
                console.log('Email sent successfully to th email', msg.to, "from 'SendGrid'")
                alert(SgEmail)
                   console.log("passing")
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (<div className="newsletter">
            <h1> This Is Our Newsletter </h1>
            <form onSubmit={handleSubmit}>
                <label> SIGN UP FOR OUR DAILY INSIDER! <label/> <br></br>
                    <br></br>
                    <input type="email"
                           name='email'
                           className="Enter_Email"
                           placeholder="Type your email"
                           onChange={event => setSgEmail(event.target.value)}
                           value={SgEmail}/>
                    <button type="submit"
                    >
                        Submit
                    </button>
                    <br></br>
                    <h1>Thanks for Signing Up!</h1>
                </label>
            </form>
        </div>
    )
}
export default Subscribe;