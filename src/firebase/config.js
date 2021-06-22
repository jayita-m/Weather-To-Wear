import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJkU68jluY3eOr_3jBUBtB9wYLYhxOCYs",
  authDomain: "my-weather-wearer.firebaseapp.com",
  projectId: "my-weather-wearer",
  storageBucket: "my-weather-wearer.appspot.com",
  messagingSenderId: "958334708363",
  appId: "1:958334708363:web:61647bf62083fccabd828e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };