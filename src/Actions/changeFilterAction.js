import {FILTER_CHANGE, FILTER_CHANGE_TO_DEFAULT} from "../Reducers/types";

export default function changeFilterAction(newState) {
    if(newState) {
        return {
            type: FILTER_CHANGE,
            payload: newState
        }
    } else {
        return {
            type: FILTER_CHANGE_TO_DEFAULT
        }
    }
}