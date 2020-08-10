import React from "react";
import Logo from "../assets/Logo.png";
import Basket from "../assets/basket.png";
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <header className="header">

            <div className="logo">
                <img className="icon-logo" src={Logo}/>
                <Link to="/"><div className="logo-title">game Boy!</div></Link>
            </div>

            <div className="basket-button">
                <Link to="/Basket"><img className="icon-basket" src={Basket}/></Link>
                <div className="basket-indicator">4</div>
            </div>

        </header>
    );
}