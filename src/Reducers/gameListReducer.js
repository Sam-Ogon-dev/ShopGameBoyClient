import {GAME_LIST_CHANGE} from "./types";

const initialState = {
    gameList: { values: [], count: 0}
};

export default function gameListReducer(state = initialState, action) {
    if(action.type === GAME_LIST_CHANGE) {
        return {
            gameList: action.payload
        }
    }
    return state;
}