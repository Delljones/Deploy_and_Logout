// import React, {useState} from "react";
// // using concurrently - https://www.npmjs.com/package/concurrently
// //     put into the Json Form
// //
// //     "server": "nodemon server.js"
// // Create two applications side by side
// //     "dev": "concurrently \"npm run server\" \"npm start\""
// //
//
//
// // Using: npm i react-mailchimp-form
//
//
//
// import './newsletter.css'
// // import './server'
// //import './database'
//
// function Newsletter() {
//
//     // Handles the data inputted into the form
//     const [mEmail, setmEmail] = useState(0)
//     const handlemEmail = (e) => {
//         setmEmail(e.target.value)
//     }
//
//     const [fName, setFname] = useState(0)
//     const handleFname = (e) => {
//         setFname(e.target.value)
//     }
//
//     const [lName, setLname] = useState(0)
//     const handleLname = (e) => {
//         setLname(e.target.value)
//     }
//
//     // Handle the Click function when on submit is clicked - sends to the back end server
//     // Linking to the backend server
//     // Creating an Async function to fetch API
//
//     const handleClick = async (e) => {
//         e.preventDefault()
//         await fetch("http://localhost:8000", {
//             method: 'post',
//             headers: {"Content-Type": "application/json"},
//             // converting the object to a json file
//             body: JSON.stringify({
//                 mEmail: mEmail,
//                 fName: fName,
//                 LName: lName,
//             })
//         })
//             .then(response => response.json())
//             .then(data => console.log(data))
//     }
//
//     // track this in the log as it appears
//     console.log('raw data is: ', ' fName:', fName, ' lName: ', lName, 'Email: ', mEmail)
//
//     return (
//         <div className="newsletter">
//             <h1> This Is Our Newsletter </h1>
//             <form>
//                 <label> SIGN UP FOR OUR DAILY INSIDER! <label/> <br></br>
//                     <br></br>
//                     <input name="Fname" placeholder="Enter First Name" required="required"
//                            onChange={handleFname}/> <br></br>
//                     <input name="Lname" placeholder="Enter Last Name" required="required"
//                            onChange={handleLname}/> <br></br>
//                     <input name="email" placeholder="Enter Email" required="required" onChange={handlemEmail}/>
//                     <button class="newsletterButton" type="submit" onSubmit={handleClick}>Submit</button>
//                     <br></br>
//                     <h1>Thanks for Signing Up</h1>
//                 </label>
//             </form>
//         </div>
//     )
// }
// export default Newsletter;