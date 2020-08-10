import {FILTER_CHANGE} from "./types";

const initialState = {
    price: false,
    rating: false,
    genre: "",
    searchTitle: ""
}

export default function filterReducer(state = initialState, action) {
    if(action.type === FILTER_CHANGE) {
        return action.payload;
    }

    return state;
}