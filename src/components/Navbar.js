import React from "react";
import logo from "../images/Troll Face.png";

export default function Navbar(){
    return(
        <div className="nav">
            <img className="nav-img" src={logo}></img>
            <h2 className="nav-title">Meme Generator</h2>
            <h4 className="nav-proj">React Project</h4>
        </div>
    )
}