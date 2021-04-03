import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "hackiethon-2021-wfh.firebaseapp.com",
  databaseURL: "https://hackiethon-2021-wfh-default-rtdb.firebaseio.com",
  projectId: "hackiethon-2021-wfh",
  storageBucket: "hackiethon-2021-wfh.appspot.com",
  messagingSenderId: "918825205301",
  appId: "1:918825205301:web:e843cb0549b9bd4343bb7c"
};

app.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.database = app.database();
    this.auth = app.auth();
  }

  debugError(error) {
    alert(`${error.code} error has occured - ${error.message}`);
  }

  writeDatabase(root, json) {
    this.database.ref(root).set(json)
      .catch(this.debugError);
  }

  readDatabase(root, event, callback) {
    this.database.ref(root).on(event, callback);
  }

  onUserActive(callback, fallback=null) {
    this.auth.onAuthStateChanged((userInstance) => {
      if(userInstance != null) {
        callback(userInstance.uid);
      }
      else if(fallback != null) {
        fallback();
      }
    });
  }
}

export default Firebase;