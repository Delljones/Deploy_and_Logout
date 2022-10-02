// From your Prac you ran

//cd into the new directory to initilise the server
// npm init-y  - will make a package.json

// then run nodemon server.js (make sure you are CD into the folder)
// then install express again - npm install express - if you have multiple files you need
// to keep installing express
//
// need to get API key from mail chimp

// server us13 from mailchimp - it is the start of the url

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const https = require("https") // need to import the https module
const mailchimp = require("@mailchimp/mailchimp_marketing");

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.post("/", (req, res)=> {
    var apikey ='5c1997b17eab965714be14f9ea6a1a63'
    var listid = '99bff476d8'
    var server = '13'

    var fname = req.body.first_name
    var lname = req.body.last_name
    var email = req.body.email

    const url= "https://api.mailchimp.com/3.0/lists/{99bff476d8}"

    const options = {
        method: "POST",
        auth:"sit313: 5c1997b17eab965714be14f9ea6a1a63"
    }

    const data = {

        members :[
            {   email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LANME: lname
                }  } ] }

    var jsonData = JSON.stringify(data)
    const request = https.request(url, options, (response)=>{
        response.on("data", (data)=>{
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData)
    request.end()
})

app.listen(8080, function(){
    console.log("Server is running on 8080");
})
