import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducers

const firebaseConfig = {
  apiKey: "AIzaSyBYiHENU5TUE0ZA5xNzsYOLAdnJ2YIoZYk",
  authDomain: "btstream-c5e8f.firebaseapp.com",
  projectId: "btstream-c5e8f",
  storageBucket: "btstream-c5e8f.appspot.com",
  messagingSenderId: "466197817770",
  appId: "1:466197817770:web:f1f6c53820cb5ece67a3d3",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// // Create initial state
// const initialState = { };

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  // initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
