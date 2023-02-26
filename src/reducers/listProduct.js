import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ALL_PRODUCT_BY_CATALOG, GET_ALL_PRODUCT_TRUE, SEARCH_PRODUCT, UPDATE_PRODUCT } from "../constants/Constant";
import { deleteProduct, getDataProduct, productCreate, updateProduct } from "../service/ProductApi";

let initialState = [];
export const listProduct = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            state = action.payLoad;
            return state;
        case GET_ALL_PRODUCT_TRUE:
            state = action.payLoad;
            return state;
        case GET_ALL_PRODUCT_BY_CATALOG:
            state = action.payLoad;
            return state;
        case CREATE_PRODUCT:
            productCreate(action.payLoad).then(() => {
                getDataProduct().then((res) => {
                    state = res.data
                })
            })
            return state;

        case UPDATE_PRODUCT:
            updateProduct(action.payLoad.id, action.payLoad).then(() => {
                getDataProduct().then((res) => {
                    state = res.data
                })
            })
            return state;
        case DELETE_PRODUCT:
            deleteProduct(action.payLoad).then(() => {
                getDataProduct().then((res) => {
                    state = res.data
                })
            })
            return state;
        case SEARCH_PRODUCT:
            console.log("action.payLoad", action.payLoad);
            state = action.payLoad;
            return state;
        default:
            return state;
    }

}