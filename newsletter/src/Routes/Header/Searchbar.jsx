import React from 'react';
import "./searchbar.css"
import {Link, Outlet} from "react-router-dom";
import '../Post/Post'
import '../Authentication/Login'

function Searchbar() {
    return (
        <div>
            <Outlet/>
            <div class="searchbar">
                <form method="POST">
                    <label for="searchbar"> DEV @ Deakin.com </label>
                    <input type="search" id="search" class="form-control" name="search" placeholder="  Search"
                           required="required"/>
                    <Link to="/" class="searchbutton" type="submit">Home</Link>
                    <Link to='/post' class="searchbutton" type="submit">Post</Link>
                    <Link to="/login" class="searchbutton" type="submit">Log In</Link>
                    <Link to="/loggedout" class="searchbutton" type="submit">Logout</Link>
                    <Link to="/newsletter" class="searchbutton" type="submit">Contact</Link>
                </form>
            </div>
        </div>
    )
}
export default Searchbar