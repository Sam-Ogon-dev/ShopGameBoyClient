import {FILTER_CHANGE} from "../Reducers/types";

export default function changeFilterAction(state) {
    return {
        type: FILTER_CHANGE,
        payload: {...state}
    }
}