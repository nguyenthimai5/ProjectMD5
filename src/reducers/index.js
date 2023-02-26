import {combineReducers} from "redux"
import {listCatalog} from "./listCatalog"
import { listSize } from "./listSize"
import {listTopping} from "./listTopping"
import { listProduct } from "./listProduct"
import {listProductDetail} from "./listProductDetails"
export const rootReducer=combineReducers({listCatalog,listSize,listTopping,listProduct,listProductDetail})