import React from "react";
import '../App.css'
import Menulist from "./Menulist";

function Nav() {
    const menu = () => {
        document.getElementById("menu").classList.toggle("overlay1");
        document.getElementById("menu").classList.toggle("overlay2");
        document.getElementById("sociallinks").classList.remove("sociallinks1");
        document.getElementById("sociallinks").classList.add("hidden");
        document.getElementById("btn").classList.toggle("button1");
        
    }

    return (

        <div className="nav">
            <h1>WebDevRay</h1>
            
            <label for="burger" class="burger" >
                <input id="burger" type="checkbox" onClick={menu}></input>
                    <span></span>
                    <span></span>
                    <span></span>
            </label>
            
        </div>

    );
}

export default Nav