import { CREATE_SIZE, DELETE_SIZE, GET_ALL_SIZE, GET_ALL_SIZE_TRUE, SEARCH_SIZE, UPDATE_SIZE } from "../constants/Constant";
import { createSize, deleteSize, editSize, getDataSize } from "../service/SizeApi";

let initialState = [];
export const listSize = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SIZE:
            state = action.payLoad
            return state;
        case GET_ALL_SIZE_TRUE:
            state = action.payLoad
            return state;
        case SEARCH_SIZE:
            state = action.payLoad
            return state;
        case CREATE_SIZE:
            console.log("vao reducer chua");
            createSize(action.payLoad).then(
                getDataSize().then((res) => {
                    state = res.data
                })
            )
            return state;
        case UPDATE_SIZE:
            editSize(action.payLoad.id, action.payLoad).then(
                getDataSize().then((res) => {
                    state = res.data
                })
            )
            return state;

        case DELETE_SIZE:
            deleteSize(action.payLoad).then(
                getDataSize().then((res) => {
                    state = res.data
                })
            )
            return state;
        default:
            return state;
    }

}