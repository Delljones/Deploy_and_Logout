const express = require("express")
const bodyParser = require("body-parser")
const {request} = require("https");
const server = express()
server.use(bodyParser.urlencoded({extended: true}))
server.use(express.static("public"))
server.get("/", (req, res) => {
   const user = {
       SgEmail: ''
   }
   res.send(user)
});

console.log("Running", "email is ", this.user)


// server.use(bodyParser.json())
// server.post("/", (req, res) => {
//     console.log(req.body)
// })
//
// fetch("http://localhost:8000", {
//     method: 'post',
//     headers: {"Content-Type": "application/json"},
//     // converting the object to a json file
//     body: JSON.stringify({
//      MEmail: 'rmannekejones@deakin.edu.au'
//     })
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.message)
//         alert(data.message)
//         setSgEmail('')
//
//     }).catch(err => {
//     console.log(err)
// })
//
// // Using the HTML for the form submission
// server.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });
//
// // handling user input
// server.post('/', function (req, res) {
//     // Mail chimp auth tokens
//     const apiKey = "461ee2459d8fade998a2f8f5891e3f54-us13";
//     const server = "us13";
//     const audienceID = "99bff476d8";
//     request
//         .post('https://' + server + '.api.mailchimp.com/3.0/lists/' + audienceID + '/members/')
//         .set('Authorization', 'Basic ' + new Buffer('any:' + apiKey).toString('base64'))
//         .set('Content-Type', 'application/json;charset=utf-8')
//         .send({
//             'email_address': req.body.email,
//             'status': 'subscribed',
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
// console.log("function has been successful")
