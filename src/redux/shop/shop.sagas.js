import { put , takeLatest  } from "@redux-saga/core/effects";
import shopActionTypes from "./shop.types";

import { collection , getDocs } from "@firebase/firestore";
import { db , converCollectionsSnapshotToMap } from "../../assets/firebase/firebase.utils";


import { fetchCollectionSuccess , fetchCollectionFailure } from "./shop.actions";



function* fetchCollectionAsync(){
    try{
    const collectionRef = yield collection(db , 'collections')
    const querySnapshot = yield getDocs(collectionRef)
    const convertedCollection = yield converCollectionsSnapshotToMap(querySnapshot);
    yield put(fetchCollectionSuccess(convertedCollection))
    } catch(err) {
    yield put(fetchCollectionFailure(err))
    }
}


export function* fetchCollectionStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTION_START , fetchCollectionAsync )
}