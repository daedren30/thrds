import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuC-RmTPGAv9FfcRlij_CXatcqNQCtyX8",
  authDomain: "threads-db-1fbb4.firebaseapp.com",
  projectId: "threads-db-1fbb4",
  storageBucket: "threads-db-1fbb4.appspot.com",
  messagingSenderId: "747472068664",
  appId: "1:747472068664:web:bd665956eee3082092c6cd",
  measurementId: "G-S0Z28F4XFH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;