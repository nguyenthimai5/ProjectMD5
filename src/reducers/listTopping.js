import { CREATE_TOPPING, DELETE_TOPPING, GET_ALL_TOPPING, UPDATE_TOPPING } from "../constants/Constant";
import { createTopping, deleteTopping, getDataTopping, updateTopping } from "../service/ToppingApi";

let initialState = [];
export const listTopping = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TOPPING:
            state = action.payLoad;
            return state;
        case CREATE_TOPPING:
            createTopping(action.payLoad).then(
                getDataTopping().then((res) =>
                state = res.data
            ))
            
            return state;
        case UPDATE_TOPPING:
                    updateTopping(action.payLoad.id, action.payLoad).then(
                getDataTopping().then((res) =>
                state = res.data
            )
            )
            return state;
        case DELETE_TOPPING:
            deleteTopping(action.payLoad).then(
                getDataTopping().then((res) => {
                    state = res.data
                })
            )
            return state;
        default:
            return state;
    }
}
