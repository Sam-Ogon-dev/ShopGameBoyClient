import React from "react";
import Arrow_2 from "../assets/arrow_2.png";
import Arrow from "../assets/arrow.png";
import ProductCards from "./ProductCards";
import Car from "../assets/car.png"
import BasketItems from "./BasketItems";

export default function BasketROUTE() {
    return (
        <>
            <div className="menu">
                <div className="filter">
                    <div className="title-main">Cортировка по:</div>
                    <div className="control-panel">
                        <div className="title-simple neutral-button active-rotate"><span>цена</span> <img src={Arrow_2}/></div>
                        <div className="title-simple neutral-button"><span>рейтинг</span> <img src={Arrow_2}/></div>
                    </div>

                    <div className="control-panel">
                        <button className="neutral-button accept">Применить</button>
                        <button className="neutral-button">Сбросить</button>
                    </div>
                </div>

                <div className="title-main">
                    Итого: 5799 руб
                </div>

                <div className="control-panel">
                    <button className="neutral-button accept">Оформить заказ</button>
                    <button className="neutral-button">Очистить корзину</button>
                </div>

            </div>
            <div className="work-area">
                <div className="basket-area">
                    <BasketItems />
                </div>
            </div>
        </>
    );
}