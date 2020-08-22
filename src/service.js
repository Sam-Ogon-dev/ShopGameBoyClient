import store from "./store";
import changeGameListAction from "./Actions/changeGameListAction";
import {addItemBasketAction, deleteItemBasketAction, toDefaultBasketAction} from "./Actions/changeBasketAction";

export function getGames() {
    let props = store.getState().filterReducer;
    let query = [];

    query.push(`genre=${props.genre}`);
    query.push(`size=${props.size}`)
    if(props.price) { query.push(`price=${props.price}`) }
    if(props.rating) { query.push(`rating=${props.rating}`) }
    if(props.searchTitle) { query.push(`searchTitle=${props.searchTitle}`) }
    if(props.currentPage.position) { query.push(`position=${props.currentPage.position}`) }
    if (query.length) { query = "?" + query.join("&") }

    fetch("http://localhost:3001/games" + query)
        .then(r => r.json())
        .then(r => store.dispatch(changeGameListAction(r)));

    window.scrollTo(0, 0);
}

export function itemBasket(action, id) {
    const basketReducer = store.getState().basketReducer;
    if(action === "add") { store.dispatch(addItemBasketAction(basketReducer, id)) }
    if(action === "delete") { store.dispatch(deleteItemBasketAction(basketReducer, id)) }
    if(action === "clear") { store.dispatch(toDefaultBasketAction(basketReducer)) }
}