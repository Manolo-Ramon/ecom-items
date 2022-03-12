import  { initializeApp }  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQfNM34A92QhUdVPf1rZdIQLGMSBoM-bY",
    authDomain: "ecom-db-182a8.firebaseapp.com",
    projectId: "ecom-db-182a8",
    storageBucket: "ecom-db-182a8.appspot.com",
    messagingSenderId: "884397951998",
    appId: "1:884397951998:web:4038d77f5d16b20e168eaf",
    measurementId: "G-5R7R0RDYNM"
  };


const app =  initializeApp(config);

export const auth = getAuth(app);
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then( result => {
            console.log(result.user);
        })
}

export default signInWithGoogle;