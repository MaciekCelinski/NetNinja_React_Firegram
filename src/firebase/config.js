import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCEd0YR4sxpsh-yhxCq4s793YV1KPr0Icw",
	authDomain: "firegram-netninja-6dbed.firebaseapp.com",
	projectId: "firegram-netninja-6dbed",
	storageBucket: "firegram-netninja-6dbed.appspot.com",
	messagingSenderId: "589369514784",
	appId: "1:589369514784:web:b12df30f2069e4ad2b1545",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
