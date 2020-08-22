import {BASKET_LIST_CHANGE, BASKET_LIST_TO_DEFAULT} from "./types";

function getDefaultValue() {
    const rowData = localStorage.getItem("basket");
    if(rowData) {
        let defaultMap = new Map();
        Object.entries(JSON.parse(rowData)).map(item => {
            defaultMap.set(+item[0], item[1]);
        });
        return defaultMap;
    }
    else { return new Map() }
}

const initState = {
    basketGames: getDefaultValue(),
    amount: localStorage.getItem("amount") || 0
}

export default function basketReducer(state = initState, action) {
    if(action.type === BASKET_LIST_CHANGE) {
        return { ...action.payload }
    }
    if(action.type === BASKET_LIST_TO_DEFAULT) {
        return {
            basketGames: new Map(),
            amount: 0
        };
    }
    return state;
}