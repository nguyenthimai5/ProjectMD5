import { CREATE_TOPPING, DELETE_TOPPING, GET_ALL_TOPPING, GET_ALL_TOPPING_TRUE, SEARCH_PRODUCT, SEARCH_TOPPING, UPDATE_TOPPING } from "../constants/Constant"

export const act_get_all_topping=(listTopping)=>{
 return{
    type:GET_ALL_TOPPING,
    payLoad:listTopping
 }

}

export const act_get_all_topping_true=(listTopping)=>{
   return{
      type:GET_ALL_TOPPING_TRUE,
      payLoad:listTopping
   }
  
  }

  
export const search_get_all_topping_true=(listTopping)=>{
   return{
      type:SEARCH_TOPPING,
      payLoad:listTopping
   }
  
  }


export const act_create_topping=(topping)=>{
 return{
    type:CREATE_TOPPING,
    payLoad:topping
 }

}

export const act_update_topping=(topping)=>{
   return{
      type:UPDATE_TOPPING,
      payLoad:topping
   }
  
  }

  export const act_delete_topping=(toppingId)=>{
   return{
      type:DELETE_TOPPING,
      payLoad:toppingId
   }
  
  }