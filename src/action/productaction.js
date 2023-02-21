import { GET_ALL_PRODUCT } from "../constants/Constant"

export const act_get_all_product=(listProduct)=>{
    return{
        type:GET_ALL_PRODUCT,
        payLoad:listProduct
    }
}