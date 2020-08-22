import React from "react";
import {connect} from "react-redux";
import BasketItems from "./BasketItems";
import {itemBasket} from "../service";
import OrderForm from "./OrderForm";
import {Link} from "react-router-dom";

function BasketROUTE({basketReducer}) {
    const [basketGameList, setBasketGameList] = React.useState([]);
    const [sumPrice, setSumPrice] = React.useState(0);
    const [orderForm, setOrderForm] = React.useState(false);

    function countPrice(gameList) {
        setSumPrice(gameList.reduce((sum, item) => sum + (item.price * basketReducer.basketGames.get(item.id) || 0), 0));
    }

    React.useEffect(() => {
        const idArr = [];
        for (let id of basketReducer.basketGames.keys()) {
            idArr.push(id);
        }
        fetch("http://localhost:3001/basket/?id=" + idArr)
            .then(r => r.json())
            .then(r => {
                setBasketGameList(r);
                countPrice(r);
            });
    }, []);

    React.useEffect(() => {
        countPrice(basketGameList);
    }, [basketReducer]);

    return (
        <>
            {orderForm ? <OrderForm setOrderForm={setOrderForm}
                                    order={Object.fromEntries(basketReducer.basketGames)}/> : ""}

            <div className="menu">
                <div className="title-main">
                    Итого: {sumPrice} руб
                </div>

                <div className="control-panel">
                    <button className="neutral-button accept" onClick={() => {
                        setOrderForm(true);
                    }}>Оформить заказ</button>
                    <button className="neutral-button" onClick={() => {
                        itemBasket("clear");
                        setBasketGameList([]);
                        countPrice(basketGameList);
                    }}>Очистить корзину</button>
                </div>
                <Link to="/"><div className="backLink">Вернуться к покупкам</div></Link>

            </div>
            <div className="work-area">
                <div className="basket-area">
                    <BasketItems basketGameList={basketGameList}
                                 setBasketGameList={setBasketGameList}
                                 basketReducer={basketReducer}
                                 countPrice={countPrice}/>
                </div>
            </div>
        </>
    );
}

function mapStateToProps(store) {
    return {basketReducer: store.basketReducer};
}

export default connect(mapStateToProps)(BasketROUTE);