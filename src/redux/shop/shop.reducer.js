import shopActionTypes from "./shop.types"

const INITIAL_STATE = {
    collection : null ,
    message : null ,
    isFetching : false
}

const shopReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case shopActionTypes.FETCH_COLLECTION_START : 
        return {
            ...state , 
            isFetching : true 
        }
       case shopActionTypes.FETCH_COLLECTION_SUCCESS : 
       return {
           ...state ,
           collection : action.payload,
           isFetching : false ,
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