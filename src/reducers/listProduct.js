import { GET_ALL_PRODUCT } from "../constants/Constant";

let initialState = [];
export const listProduct = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            state = action.payLoad;
            return state;
        default:
            return state;
    }

}