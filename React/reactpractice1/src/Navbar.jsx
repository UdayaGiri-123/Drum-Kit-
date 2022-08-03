import React from "react";
import {NavLink} from "react-router-dom";

function Navbar(){
return(
    <nav>
        <ul>
            <li>
                <NavLink to="/Home" style={"padding:0px"} >Home </NavLink>
            </li>
            <li>
                <NavLink to="/About" style={"padding:0px"}> About </NavLink>
            </li>
        </ul>
    </nav>
)
    
}

export default Navbar;