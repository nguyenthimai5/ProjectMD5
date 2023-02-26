import { type } from "@testing-library/user-event/dist/type"
import { CREATE_SIZE, DELETE_SIZE, GET_ALL_SIZE, GET_ALL_SIZE_TRUE, SEARCH_SIZE, UPDATE_SIZE } from "../constants/Constant"

export const act_get_all_size = (listSize) => {
   return {
      type: GET_ALL_SIZE,
      payLoad: listSize
   }
}

export const search_get_all_size = (listSize) => {
   return {
      type: SEARCH_SIZE,
      payLoad: listSize
   }
}

export const act_get_all_size_true = (listSize) => {
   return {
      type: GET_ALL_SIZE_TRUE,
      payLoad: listSize
   }
}

export const act_create_size = (size) => {
   console.log("vao action chua");
   return {
      type: CREATE_SIZE,
      payLoad: size
   }
}

export const act_edit_size = (size) => {
   return {
      type: UPDATE_SIZE,
      payLoad: size
   }
}

export const act_delete_size = (sizeId) => {
   return {
      type: DELETE_SIZE,
      payLoad: sizeId
   }
}