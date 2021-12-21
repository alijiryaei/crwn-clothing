import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection ,
  setDoc,
  getDoc,
  writeBatch
} from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider  , onAuthStateChanged , } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAOqIVspxvXtRkxllWphSB36P-vytLUiBs',
  authDomain: 'crown-db-6ed8f.firebaseapp.com',
  projectId: 'crown-db-6ed8f',
  storageBucket: 'crown-db-6ed8f.appspot.com',
  messagingSenderId: '1062587707854',
  appId: '1:1062587707854:web:e54e95bfb71ba69c0e7b9f',
  measurementId: 'G-FSBMEZM6FP',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();


export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = doc(db, 'users', userAuth.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createDate,
        ...otherData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

// export const addCollectionAndDocuments = async (collectionKey , objectToAdd) => {

//   const batch = writeBatch(db)
//   objectToAdd.forEach( obj => {
//     const newDocRef = doc(collection(db, collectionKey))
//     batch.set(newDocRef , obj)
//   })

//   return await batch.commit()
// }

export const converCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const {items , title } = doc.data()

    return {
      routeName : encodeURI(title.toLowerCase()),
      title ,
      items ,
      id : doc.id
    }
  })
   return transformedCollection.reduce( (accumulator , collection ) => {
   accumulator[collection.title.toLowerCase()] = collection;
   return accumulator
  } , {})
}

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();


export const getCurrentUser = () => {
  return new Promise((resolve , reject) => {
    const unSubscribe = auth.onAuthStateChanged( userAuth => {
      unSubscribe();
      resolve(userAuth)
    },reject)
  })
}


export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});



export const signInWithGoogle = () => signInWithPopup(auth, provider);
