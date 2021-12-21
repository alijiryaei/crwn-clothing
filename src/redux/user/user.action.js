import userActionTypes from "./user.types";


export const googleSignInStart = () => ({
    type : userActionTypes.GOOGLE_SIGN_IN_START
});


export const emailSignInStart = emailAndPasswors => ({
    type : userActionTypes.EMAIL_SIGN_IN_START ,
    payload : emailAndPasswors
});


export const signInSuccess = user => ({
    type : userActionTypes.SIGN_IN_SUCCESS,
    payload : user
})

export const signInFailure = msg =>({
    type : userActionTypes.SIGN_IN_FAILURE,
    payload : msg
})

export const checkUserSession = () => ({
    type : userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type : userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type : userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (msg) => ({
    type : userActionTypes.SIGN_OUT_FAILURE , 
    payload : msg
})

export const signUpStart = userData => ({
    type : userActionTypes.SIGN_UP_START ,
    payload : userData
})

export const signUpSuccess = ({user , additionalData}) => ({
    type : userActionTypes.SIGN_UP_SUCCESS , 
    payload : {user , additionalData}
})

export const signUpFailure = msg => ({
    type : userActionTypes.SIGN_UP_FAILURE ,
    payload : msg
})
