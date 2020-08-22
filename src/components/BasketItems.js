import React from "react";
import {itemBasket} from "../service";

export default function BasketItems({basketGameList, setBasketGameList, basketReducer}) {

    function deleteBasketGame(id) {
        basketGameList.map((gameId, index) => {
           if(gameId.id === id) {
               basketGameList.splice(index, 1);
               setBasketGameList(basketGameList);
           }
        });
    }


    return (
        <>
            {basketGameList.map(({img, title, price, rating, id}) =>
                <div className="basket-item" key={id}>
                    <img className="product-image" src={img}/>
                    <div className="title-main">{title}</div>
                    <div className="description">
                        <div className="title-simple"><b>Цена:</b> {price} руб</div>
                        <div className="title-simple"><b>Рейтинг:</b> {rating}</div>
                        <div className="title-simple"><b>В корзине:</b> {basketReducer.basketGames.get(id)}</div>
                        <div className="control-panel">

                            <button className="neutral-button accept" onClick={
                                () => {
                                    itemBasket("add", id);
                                }
                            }>+</button>

                            <button className="neutral-button" onClick={
                                () => {
                                    itemBasket("delete", id);
                                    if(!(basketReducer.basketGames.get(id) - 1)) { deleteBasketGame(id) }
                                }
                            }>-</button>

                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

