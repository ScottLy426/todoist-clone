import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAOg6ooXoEC2dOPAWoUaoDNe_3vwAYQ8ms",
    authDomain: "todoist-clone-9b68b.firebaseapp.com",
    projectId: "todoist-clone-9b68b",
    storageBucket: "todoist-clone-9b68b.appspot.com",
    messagingSenderId: "451089845203",
    appId: "1:451089845203:web:441be22b58c41ed7c77d26",
    measurementId: "G-V2KV33VPLW"
});
export {firebaseConfig as firebase};