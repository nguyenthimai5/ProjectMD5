import { CREATE_PRODUCTDETAIL, DELETE_PRODUCTDETAIL, GET_ALL_PRODUCTDETAIL, SEARCH_PRODUCTDETAIL } from "../constants/Constant"

export const act_get_all_productdetails=(listProductDetail)=>{
    return{
        type:GET_ALL_PRODUCTDETAIL,
        payLoad:listProductDetail
    }
}

export const act_create_productdetails=(proDetailNew)=>{
    return{
        type:CREATE_PRODUCTDETAIL,
        payLoad:proDetailNew
    }
}



export const act_delete_productdetails=(productDtId)=>{
    return{
        type:DELETE_PRODUCTDETAIL,
        payLoad:productDtId
    }
}

export const act_search_productdetails=(listProductDetail)=>{
    
    return{
        type:SEARCH_PRODUCTDETAIL,
        payLoad:listProductDetail
    }
}