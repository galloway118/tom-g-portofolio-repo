import React from "react";
import './Navbar_button.css'

const Sidebutton = props => {
    return(
    <button className="navbarbutton" onClick={props.click}>
        <div className="buttonline"></div>
        <div className="buttonline"></div>
        <div className="buttonline"></div>
    </button>
    )
}

export default Sidebutton;