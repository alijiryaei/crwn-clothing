import { call, all } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shop.sagas';
import { onSignOutSuccess } from './cart/cart.saga';
import {
  onGoogleSignInStart,
  onEmailSignInStart,
  checkUserSession,
  signOutStart,
  onSignUpStart ,
  onSignUpSuccess
} from './user/user.saga';
function* rootSaga() {
  yield all([
    call(fetchCollectionStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(checkUserSession),
    call(signOutStart),
    call(onSignOutSuccess),
    call(onSignUpStart) ,
    call(onSignUpSuccess)
  ]);
}

export default rootSaga;
