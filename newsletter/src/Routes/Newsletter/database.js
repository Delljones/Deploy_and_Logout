// From your Prac you ran
//cd into the new directory to initilise the server
// npm init-y  - will make a package.json
// then run nodemon server.js (make sure you are CD into the folder)
// then install express again - npm install express - if you have multiple files you need
// to keep installing express
// need to get API key from mail chimp
// server us13 from mailchimp - it is the start of the url
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const https = require("https") // need to import the https module

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "")
});

app.post("/", (req, res) => {
    const apikey = '5c1997b17eab965714be14f9ea6a1a63';
    const mEmail = req.body.mEmail;
    const fName = req.body.fname;
    const lName = req.body.lname;

    const url = "https://api.mailchimp.com/3.0/lists/{99bff476d8}"

    const options = {
        method: "POST",
        auth: "sit313: 5c1997b17eab965714be14f9ea6a1a63"
    }

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    fName: fName,
                    lName: lName,
                    mEmail: mEmail
                }
            }]
    }

    const jsonData = JSON.stringify(data);
    const request = https.request(url, options, (response) => {
        response.on("data", (data) => {
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData)
    request.end()
})

app.listen(8000, function () {
    console.log("Server is running on 8000");
})
