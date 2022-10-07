// +---- SENDGRID -----+
// Using npm install --save @sendgrid/mail

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Thank For Subscribing',
    text: 'Dev@Deakin.edu.au',
    html: '<strong>Thanks for Subscribing</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })

