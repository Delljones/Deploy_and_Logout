import React from "react";
import Deakin from "./deakin.jpg";
import './home.css';
function Home () {
    return (
        <div className="home">
            <h1>Welcome to Deakin!</h1>
            <img src={Deakin} alt="Deakin Image"/>
        </div>
    )
}
export default Home;