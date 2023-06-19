// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  import firebase from "firebase";
   const firebaseAPP = firebase.initilizeApp({
    apiKey: "AIzaSyBOaOV3IUdwoOWqQ53F5mxQrBstZhtpuFs",
    authDomain: "instagram-clone-8810e.firebaseapp.com",
    projectId: "instagram-clone-8810e",
    storageBucket: "instagram-clone-8810e.appspot.com",
    messagingSenderId: "691394534448",
    appId: "1:691394534448:web:3d3d5ff65cb5ea57d161f5",
    measurementId: "G-NCPJ4F9DDC"
   });
   
   const db = firebaseAPP.firestore();
   const auth = firebase.auth();
   const storage = firebase.storage();

   export {db,auth,storage};