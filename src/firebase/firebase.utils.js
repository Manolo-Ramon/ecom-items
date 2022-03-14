import { async } from '@firebase/util';
import  { initializeApp }  from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBQfNM34A92QhUdVPf1rZdIQLGMSBoM-bY",
    authDomain: "ecom-db-182a8.firebaseapp.com",
    projectId: "ecom-db-182a8",
    storageBucket: "ecom-db-182a8.appspot.com",
    messagingSenderId: "884397951998",
    appId: "1:884397951998:web:4038d77f5d16b20e168eaf",
    measurementId: "G-5R7R0RDYNM"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
 
    const userRef = doc(firestore, `users/${userAuth.uid}`)
    const snapShot =  await getDoc(userRef);
    
    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userRef
}

const app =  initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then( result => {
            console.log(result.user);
        })
}

export default signInWithGoogle;