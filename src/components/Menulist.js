import React from "react";
import '../App.css'

function Menulist() {
    const btn = () => {
       
        document.getElementById("sociallinks").classList.toggle("sociallinks1");
    }
    return (
        <div className="menulist">
            <div className="box overlay2" id="menu">
                <button id="btn" onClick={btn} className="button1"> Follow Me
                </button>
                <div className="hidden" id="sociallinks">
                    <a href="https://www.instagram.com/ligma.ray/">Instagram</a>
                    <a href="https://discord.gg/TWsRN7CuN4">Discord</a>
                </div>
            </div>
        </div>
    );
}

export default Menulist