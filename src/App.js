import React from 'react';
import "./Styles/Main.scss";
import Header from "./components/Header";
import ProductROUTE from "./components/ProductROUTE";
import BasketROUTE from "./components/BasketROUTE";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="root">
                    <Header />

                    <div className="content">
                        <Route exact path="/" component={ProductROUTE}/>
                        <Route exact path="/Basket" component={BasketROUTE}/>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
