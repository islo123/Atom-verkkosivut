import React from "react"
import {NavLink} from "react-router-dom"

const Navbar = function (){
    return (
        <div className="navbar-links"> 
            <div>
                <NavLink exact={true}  activeClassName="link2" className="link" to="/" >Palvelumme</NavLink>   
            </div>
            <div>
                <NavLink activeClassName="link2" className="link" to="/OtaYhteyttä">Ota yhteyttä</NavLink>
            </div>
         
        </div>
    )
}

export default Navbar;