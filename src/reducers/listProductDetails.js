import { CREATE_PRODUCTDETAIL, DELETE_PRODUCTDETAIL, GET_ALL_PRODUCTDETAIL } from "../constants/Constant";
import { createProductDetails, deleteProductDetails, getDataProductDetails } from "../service/ProductDetailsApi";

let initialState = [];
export const listProductDetail = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTDETAIL:
            state = action.payLoad;
            return state;
        case CREATE_PRODUCTDETAIL:
            createProductDetails(action.payLoad).then(() => {
                console.log("action.payLoad",action.payLoad);
                getDataProductDetails().then((res) => {
                    state = res.data
                })
            })
            return state;
            case DELETE_PRODUCTDETAIL:
                deleteProductDetails(action.payLoad).then(() => {
                     getDataProductDetails().then((res) => {
                        state = res.data
                    })
                })
                return state;
        default:
            return state;
    }

}