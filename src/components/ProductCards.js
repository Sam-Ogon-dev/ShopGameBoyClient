import React from "react";
import Car from "../assets/car.png";

export default function ProductCards() {
    const [gameList, setGameList] = React.useState([]);

    function getGames() {
        fetch("http://localhost:3001/games")
            .then(r => r.json())
            .then(r => setGameList(r));
    }

    return (
            <div className="product-card-area">
                {gameList.map(()=>
                    <div className="product-card">
                        <img className="product-image" src={Car}/>
                        <div className="title-main">My Tom a cat</div>
                        <div className="title-simple"><b>Цена:</b> 1300 руб</div>
                        <div className="title-simple"><b>Год выпуска:</b> 2011</div>
                        <div className="title-simple"><b>В корзине:</b> 4</div>
                        <div className="control-panel">
                            <button className="neutral-button accept">+</button>
                            <button className="neutral-button">-</button>
                        </div>
                    </div>
                )}
            </div>
    );
}