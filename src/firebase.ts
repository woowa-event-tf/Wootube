import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAzeevrF2AOGrH2h7xsqjuEkqV6nmahuYc',
  authDomain: 'wootube-72a3b.firebaseapp.com',
  projectId: 'wootube-72a3b',
  storageBucket: 'wootube-72a3b.appspot.com',
  messagingSenderId: '78317718419',
  appId: '1:78317718419:web:af8726096fced62935f666',
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
