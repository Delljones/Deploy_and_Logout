// +---- SENDGRID -----+
// Using npm install --save @sendgrid/mail
console.log("running sendgrid.js")

// Setting up the API Key
const SendGridMail = require("@sendgrid/mail")
SendGridMail.setApiKey('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');

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

