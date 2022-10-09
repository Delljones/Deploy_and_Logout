// +---- SENDGRID -----+
//Setting up express

// Setting up the API Key
    const SendGridMail = require("@sendgrid/mail")
    SendGridMail.setApiKey('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');

    const msg = {
        to: "dell_jones@outlook.com", // Change to your recipient
        from: 'rmannekejones@deakin.edu.au',
        subject: 'Send Grid Email',
        text: 'Thanks for subscribing to Dev@Deakin.edu.au',
        html: '<h1><strong>Thanks for Subscribing!</strong> Hope you have a fantastic day</h1>',
    }

    SendGridMail
        .send(msg)
        .then(() => {
            console.log('Email sent successfully to th email', msg.to, "from 'SendGrid'")
        })
        .catch((error) => {
            console.error(error)
        })




