import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE8A2YqSLVgZei8dG9D3eRww9uDS1DUwI",
  authDomain: "workmob-web.firebaseapp.com",
  databaseURL: "https://stories-workmob.firebaseio.com",
  projectId: "workmob-web",
  storageBucket: "workmob-web.appspot.com",
  messagingSenderId: "72648274239",
  appId: "1:72648274239:web:96ba036e62c662759e238a",
  measurementId: "G-G4L18N2N9M",
};

if (typeof window !== "undefined" && !firebase?.apps?.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
