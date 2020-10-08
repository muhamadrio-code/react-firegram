import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDiGpaA4XXQEf3ZL0eU-URuy5En81lgDww",
  authDomain: "firegram-311fb.firebaseapp.com",
  databaseURL: "https://firegram-311fb.firebaseio.com",
  projectId: "firegram-311fb",
  storageBucket: "firegram-311fb.appspot.com",
  messagingSenderId: "729928255120",
  appId: "1:729928255120:web:e9c03e829f44318781ba15",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
