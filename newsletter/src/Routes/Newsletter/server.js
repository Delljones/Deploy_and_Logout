const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.use(bodyParser.json())

app.post("/", (req, res) => {
    console.log(req.body)

})


//const https = require("https") // need to import the https module
//const mailchimp = require("@mailchimp/mailchimp_marketing");
//const {Console} = require("console");
//const request = require('superagent');
// const bodyParser = require("body-parser")
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// Using the HTML for the form submission
//
// app.get("/", (req, res) => {
//     res.send("__dirname + \"/index.html\">");
// });
//
//

// // Using the HTML for the form submission
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });
//
// // handling user input
// app.post('/', function (req, res) {
//     // Mail chimp auth tokens
//     const apiKey = "461ee2459d8fade998a2f8f5891e3f54-us13";
//     const server = "us13";
//     const audienceID = "99bff476d8";
//
//     request
//         .post('https://' + server + '.api.mailchimp.com/3.0/lists/' + audienceID + '/members/')
//         .set('Authorization', 'Basic ' + new Buffer('any:' + apiKey).toString('base64'))
//         .set('Content-Type', 'application/json;charset=utf-8')
//         .send({
//             'email_address': req.body.email,
//             'status': 'subscribed',
//
//         })
//         .end(function (err, response) {
//             if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
//                 res.send('Thank you for Signing Up!');
//             } else {
//                 // catch errors
//                 res.send('Im sorry your sign up failed :(');
//             }
//         });
// });
//
// //https://www.codementor.io/@mattgoldspink/integrate-mailchimp-with-nodejs-app-du10854xp
