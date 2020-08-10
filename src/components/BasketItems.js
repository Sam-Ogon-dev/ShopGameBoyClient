import React from "react";
import Car from "../assets/car.png";

export default function BasketItems() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(i);
    }
    return (
        <>
            {arr.map(()=>
                <div className="basket-item">
                    <img className="product-image" src={Car}/>
                    <div className="description">
                        <div className="title-main">My Tom a cat</div>
                        <div className="title-simple"><b>Цена:</b> 1300 руб</div>
                        <div className="title-simple"><b>Год выпуска:</b> 2011</div>
                        <div className="title-simple"><b>В корзине:</b> 4</div>
                        <div className="control-panel">
                            <button className="neutral-button accept">+</button>
                            <button className="neutral-button">-</button>
                        </div>
                    </div>
                    <button className="neutral-button">Убрать</button>
                </div>
            )}

        </>
    );
}