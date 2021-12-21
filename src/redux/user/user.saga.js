import { put, takeLatest, call } from '@redux-saga/core/effects';
import userActionTypes from './user.types';
import {
  provider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from '../../assets/firebase/firebase.utils';
import { signInWithPopup , createUserWithEmailAndPassword} from '@firebase/auth';
import { getDoc } from '@firebase/firestore';

import { signInSuccess, signInFailure , signOutSuccess , signOutFailure , signUpFailure , signUpSuccess } from './user.action';
import { signInWithEmailAndPassword } from '@firebase/auth';







function* getSnaphotFromAuth(userAuth , additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth , additionalData );
    const snapshot = yield getDoc(userRef);
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(auth, provider);
    yield getSnaphotFromAuth(user)
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield getSnaphotFromAuth(user)
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}


function* isUserAuthenticated(){
  try{
     const userAuth = yield getCurrentUser()
     if(!userAuth) return;
     yield getSnaphotFromAuth(userAuth)
  }catch(err){
     yield put(signInFailure(err))
  }
}

export function* checkUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION , isUserAuthenticated)
}


function* signOut(){
  try{
    yield auth.signOut()
    yield put(signOutSuccess())
  }catch(err){
    yield put(signOutFailure(err))
  }
}

export function* signOutStart(){
  yield takeLatest(userActionTypes.SIGN_OUT_START , signOut )
}



function* signUp({payload : {email , password , displayName}}) {
   try{
   const {user} =  yield createUserWithEmailAndPassword(auth , email , password);
   yield put(signUpSuccess({user , additionalData : {displayName}}))
   } catch(err){
    yield put(signUpFailure(err))
   }
}

export function* onSignUpStart(){
  yield takeLatest(userActionTypes.SIGN_UP_START , signUp)
}



function* signInAfterSignUp({payload : {user , additionalData}}){
   yield getSnaphotFromAuth(user , additionalData)
}


export function* onSignUpSuccess(){
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS , signInAfterSignUp)
}