import React from 'react';
import {Link, Outlet} from "react-router-dom";
import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

function Footer() {
    return (
        <div>
            <Outlet/>
            <div className="footer">
                <div className="footer-left">
                    <Link to="./about"> About Deakin</Link>
                </div>
                <div>
                    <Link to="./connect"> Connect With Us </Link>
                </div>
                <div className="footer-right">
                    <a href="deploy/src/Routes/Footer/Footer"> <FaFacebook className="icons"/></a>
                    <a href="deploy/src/Routes/Footer/Footer?hl=en"><FaInstagram className="icons"/></a>
                    <a href="https://twitter.com/Deakin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" ><FaTwitter className="icons"/></a>
                </div>
            </div>
        </div>
    )
}
export default Footer