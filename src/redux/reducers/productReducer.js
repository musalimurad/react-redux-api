import { GET_PRODUCTS_ERROR, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS } from "../actionTypes/productActionType"

const INITIAL_STATE = {products:[], isLoading: false, error:'API ERROR' }

export const getProductReducer = (state =INITIAL_STATE, {type, payload}) => {
    switch(type){
        case GET_PRODUCTS_START: return {...state, error:'', isLoading: true}
        case GET_PRODUCTS_SUCCESS: return {...state, products:payload, isLoading: false}
        case GET_PRODUCTS_ERROR: return {...state, error:payload, isLoading: false}

        default: return state;
    }
}