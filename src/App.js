import React from 'react';
import "./Styles/Main.scss";
import Header from "./components/Header";
import ProductROUTE from "./components/ProductROUTE";
import BasketROUTE from "./components/BasketROUTE";
import {BrowserRouter, Route} from "react-router-dom";




export default function App() {
    return (
        <BrowserRouter>
                <div className="root">
                    <Header />
                    <div className="content">
                        <Route exact path="/" component={ProductROUTE}/>
                        <Route exact path="/Basket" component={BasketROUTE}/>
                    </div>
                </div>
        </BrowserRouter>
    );
}

