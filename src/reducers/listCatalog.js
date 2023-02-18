import { CREATE_CATALOG, DELETE_CATALOG, GET_ALL_CATALOG, UPDATE_CATALOG } from "../constants/Constant";
import { createCatalogs, deleteCatalogs, getDataCatalogs, updateCatalogs } from "../service/CatalogApi";

let initialState = []

export const listCatalog = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATALOG:
            state = action.payload
            return state;
        case CREATE_CATALOG:
            console.log("vào reduxcer");
            createCatalogs(action.payload).then(() => {
                getDataCatalogs().then((res) => {
                    state = res.data
                })
            })
            return state;
        case UPDATE_CATALOG:
            console.log("vào reducer", action.payload);
            updateCatalogs(action.payload.id, action.payload).then(() => {
                console.log("call API thành công");
                getDataCatalogs().then((res) => {
                    state = res.data
                })
            })
            return state;
        case DELETE_CATALOG:
            deleteCatalogs(action.payload).then(() => {
                getDataCatalogs().then((res) => {
                    state = res.data
                })
            })
            return state;
        default:
            return state;

    }
}
