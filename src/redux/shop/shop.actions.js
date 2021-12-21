import shopActionTypes from "./shop.types";

export const fetchCollectionSuccess = collection => ({
    type : shopActionTypes.FETCH_COLLECTION_SUCCESS ,
    payload : collection
})

export const fetchCollectionFailure = message => ({
    type : shopActionTypes.FETCH_COLLECTION_FAILURE ,
    payload : message
})



export const fetchCollectionStart = () => ({
    type: shopActionTypes.FETCH_COLLECTION_START
})