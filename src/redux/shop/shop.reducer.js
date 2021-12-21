import shopActionTypes from "./shop.types"

const INITIAL_STATE = {
    collection : null ,
    message : null
}

const shopReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
       case shopActionTypes.FETCH_COLLECTION_SUCCESS : 
       return {
           ...state ,
           collection : action.payload,
           message : null 
       }
       case shopActionTypes.FETCH_COLLECTION_FAILURE : 
       return {
           ...state ,
           message : action.payload
       }
       default :
       return {
           ...state
       }
    }
}

export default shopReducer;