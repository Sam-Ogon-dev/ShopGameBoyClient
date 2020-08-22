import {GAME_LIST_CHANGE} from "../Reducers/types";

export default function changeGameListAction(newState) {
    return {
        type: GAME_LIST_CHANGE,
        payload: newState
    }
}