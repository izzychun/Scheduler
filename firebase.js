import * as firebase from 'firebase';

import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc-MpX4EPJSJOqlfvzoxPPpY1Gv1rUXj4",
  authDomain: "scheduler-ad65b.firebaseapp.com",
  databaseURL: "https://scheduler-ad65b-default-rtdb.firebaseio.com",
  projectId: "scheduler-ad65b",
  storageBucket: "scheduler-ad65b.appspot.com",
  messagingSenderId: "457434977411",
  appId: "1:457434977411:web:88270c5925c4fb811437b6",
  measurementId: "G-3T3M12M8SR"
};

firebase.initializeApp(firebaseConfig);

export { firebase };