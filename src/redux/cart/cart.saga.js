import { put, takeLatest } from '@redux-saga/core/effects';
import userActionTypes from './../user/user.types'
import { clearCart } from './cart.action';


function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS , clearCartOnSignOut)
}