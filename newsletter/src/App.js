import Searchbar from "./Routes/Header/Searchbar";
import {Routes, Route} from "react-router-dom";
import Login from "./Routes/Authentication/Login";
import Signup from "./Routes/Authentication/Signup";
import Post from "./Routes/Post/Post";
import React from "react";
import Footer from './Routes/Footer/Footer';
import Profile from "./Routes/Authentication/Profile";
import LoggedOut from "./Routes/Authentication/LoggedOut";
import './App.css'
import Home from "./Routes/Home/Home";
import Newsletter from "./Routes/Newsletter/Newsletter";

// main Application - Used for the routing of the project
function App() {
    return (
        <div className="App">
            <Searchbar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/loggedout" element={<LoggedOut/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/post" element={<Post/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/newsletter" element={<Newsletter/>}></Route>
                </Routes>
               <Footer/>
            </div>
        </div>
    );
}
export default App;

