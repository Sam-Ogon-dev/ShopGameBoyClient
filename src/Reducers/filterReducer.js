import {FILTER_CHANGE, FILTER_CHANGE_TO_DEFAULT} from "./types";

const initialState = {
    price: false,
    rating: false,
    genre: "8",
    searchTitle: "",
    size: 12,
    currentPage: {number: 1, position: 0, phase: 0}
}

export default function filterReducer(state = initialState, action) {
    if(action.type === FILTER_CHANGE) {
        return action.payload;
    }
    if(action.type === FILTER_CHANGE_TO_DEFAULT) {
        return initialState;
    }

    return state;
}