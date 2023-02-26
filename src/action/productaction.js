import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ALL_PRODUCT_BY_CATALOG, GET_ALL_PRODUCT_TRUE, SEARCH_PRODUCT, UPDATE_PRODUCT } from "../constants/Constant"

export const act_get_all_product=(listProduct)=>{
    return{
        type:GET_ALL_PRODUCT,
        payLoad:listProduct
    }
}

export const act_get_all_product_by_catalog=(listProduct)=>{
    return{
        type:GET_ALL_PRODUCT_BY_CATALOG,
        payLoad:listProduct
    }
}

export const act_get_all_product_true=(listProduct)=>{
    return{
        type:GET_ALL_PRODUCT_TRUE,
        payLoad:listProduct
    }
}


export const act_create_product=(product)=>{
    return{
        type:CREATE_PRODUCT,
        payLoad:product
    }
}

export const act_update_product=(product)=>{
    return{
        type:UPDATE_PRODUCT,
        payLoad:product
    }
}

export const act_delete_product=(productId)=>{
    return{
        type:DELETE_PRODUCT,
        payLoad:productId
    }
}

export const act_search_product=(listProduct)=>{

    return{
        type:SEARCH_PRODUCT,
        payLoad:listProduct
    }
}