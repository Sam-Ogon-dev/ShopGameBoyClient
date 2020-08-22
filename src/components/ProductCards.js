import React from "react";
import {connect} from "react-redux";
import {getGames, itemBasket} from "../service";

function ProductCards({gameListReducer, basketReducer}) {

    React.useEffect(() => {
        getGames();
    }, []);



    return (
            <div className="product-card-area">
                {gameListReducer.gameList.values.map(({img, title, price, rating, id}) =>
                    <div key={id} className="product-card">
                        <img className="product-image" src={img} alt={title}/>
                        <div className="title-main">{title}</div>
                        <div className="title-simple"><b>Цена:</b> {price} руб.</div>
                        <div className="title-simple"><b>Рейтинг:</b> {rating}</div>
                        <div className="title-simple"><b>В корзине:</b> {basketReducer.basketGames.get(id) || 0}</div>
                        <div className="control-panel">

                            <button className="neutral-button accept" onClick={
                                () => itemBasket("add", id)
                            }>+</button>

                            <button className="neutral-button" onClick={
                                () => itemBasket("delete", id)
                            }>-</button>

                        </div>
                    </div>
                )}
            </div>
    );
}
function mapStateToProps(store) {
    return store;
}


export default connect(mapStateToProps)(ProductCards);