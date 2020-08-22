import React from "react";
import Logo from "../assets/Logo.png";
import Basket from "../assets/basket.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


function Header({amount}) {
    const [burgerMenu, setBurgerMenu] = React.useState(false);


    function burgerMenuAction() {
        setBurgerMenu(oldState => !oldState);
        document.querySelector(".menu").classList.toggle("open");
    }

    React.useEffect(() => {
        const action = e => {
            const target = e.path.filter(item => {
                if(item === document || item === window) { return false}

                if(item.classList.contains("burger-menu-icon")
                    || item.classList.contains("burger-menu-icon-close")
                    || item.classList.contains("filter")) { return true}
            });

            if(!target.length) {
                setBurgerMenu(false);
                document.querySelector(".menu").classList.remove("open")
            }
        }

        window.addEventListener("click" , action);

        return () => {
            window.removeEventListener("click", action);
        }

    }, []);

    return (
        <header className="header">

            <div className={burgerMenu ? "burger-menu-icon-close" : "burger-menu-icon"} onClick={burgerMenuAction}/>

            <div className="logo">
                <img className="icon-logo" src={Logo} alt="icon-logo"/>
                <Link to="/" className="logo-title">game Boy!</Link>
            </div>

            <div className="basket-button">
                <Link to="/Basket"><img className="icon-basket" src={Basket} alt="icon-basket"/></Link>
                <div className="basket-indicator">{amount}</div>
            </div>
        </header>
    );
}

function mapStateToProps(store) {
    return store.basketReducer;
}
export default connect(mapStateToProps)(Header);