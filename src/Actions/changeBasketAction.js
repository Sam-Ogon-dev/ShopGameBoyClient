import {BASKET_LIST_CHANGE, BASKET_LIST_TO_DEFAULT} from "../Reducers/types";


export function addItemBasketAction({basketGames}, id) {
    basketGames = Object.fromEntries(basketGames);
    let newState = new Map();

    for (let i in basketGames) {
        newState.set(+i, +basketGames[i]);
    }

    let isExist = newState.has(id);

    if(isExist) {
        const oldValue = newState.get(id);
        newState.set(id, oldValue + 1);
    } else {
        newState.set(id, 1);
    }

    localStorage.setItem("basket", JSON.stringify(Object.fromEntries(newState)));
    localStorage.setItem("amount", countItemBasket(newState).toString());
    return {
        type: BASKET_LIST_CHANGE,
        payload: {basketGames: newState, amount: countItemBasket(newState)}
    }
}

export function deleteItemBasketAction({basketGames}, id) {
    basketGames = Object.fromEntries(basketGames);
    let newState = new Map();

    for (let i in basketGames) {
        newState.set(+i, +basketGames[i]);
    }

    let isExist = newState.has(id);

    if(isExist) {
        const oldValue = newState.get(id);

        if(!(oldValue - 1)) {
            newState.delete(id);
        } else {
            newState.set(id, oldValue - 1);
        }
    } else {
        return {type: "NONE"};
    }

    localStorage.setItem("basket", JSON.stringify(Object.fromEntries(newState)));
    localStorage.setItem("amount", countItemBasket(newState).toString());
    return {
        type: BASKET_LIST_CHANGE,
        payload: {basketGames: newState, amount: countItemBasket(newState)}
    }
}

export function toDefaultBasketAction() {
    localStorage.clear()
    return {
        type: BASKET_LIST_TO_DEFAULT
    }
}


function countItemBasket(basketGames) {
    let count = 0;
    for (let value of basketGames.values()) {
        count+=value;
    }

    return count;
}