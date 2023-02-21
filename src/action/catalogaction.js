import * as type from "../constants/Constant"

export const get_all_catalog = (listCatalog) => {
    return {
        type: type.GET_ALL_CATALOG,
        payload: listCatalog
    }
}

export const create_catalog = (catalog) => {
    return {
        type: type.CREATE_CATALOG,
        payload: catalog
    }
}

export const update_catalog = (catalog) => {
    return {
        type: type.UPDATE_CATALOG,
        payload: catalog
    }
}

export const delete_catalog = (id) => {
       return {
        type: type.DELETE_CATALOG,
        payload: id
    }
}