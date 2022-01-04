
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, getDoc
   ,addDoc, writeBatch, deleteDoc, doc, listDocuments, where
  } from 'firebase/firestore'
import dummyData from '../Utils/CompanyDataSet';
import { getStorage, ref, uploadBytes } from "firebase/storage";
const functions = require('firebase-functions');


const firebaseConfig = {
    apiKey: "AIzaSyC9hnwjS0wv2vvdpG5PTONHlflv7zUQmq4",
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  // initialize app with your config
  export const app = firebase.initializeApp(firebaseConfig);
  // initialize instance of firestore db. db connection
  const db = getFirestore(app);

  // get a ref to specific collection in the db
  const userRef = collection(db, "users");
  const companyRef = collection(db, "companies");

  // Retrieves all user data from firebase from appropriate collection
export const getUserData = async() => {
  const snapshot = await getDocs(userRef)
  let userData = [];
  snapshot.docs.forEach(doc => {
    userData.push({...doc.data(), id: doc.id})
  })
  console.log(userData);
}

  // Retrieves all companydata from firebase from appropriate collection
export const getCompanyData = async() => {
  const snapshot = await getDocs(companyRef)
  console.log(snapshot);
  let companyData = [];
  snapshot.docs.forEach(doc => {
    companyData.push({...doc.data(), id: doc.id})
  })
  console.log(companyData);
}

// function that adds data to user collection
export const addData = async () => {
  try {
    const newData = await addDoc(userRef, {
      name: 'jason',
      age: 23
    })
    console.log(newData, 'success!')
  } catch (e) {
    console.error(e)
  }
  
}


export const dummyDataToFirebase = async() => {
  try {
    const batch = writeBatch(db);
    dummyData.forEach(doc => {
      addDoc(companyRef, doc)
      console.log(doc)
    })
    await batch.commit();
    console.log('success!')

  } catch (error) {
    console.error(error, 'try again!');
  }
  
}

// Storage for firebase photos

// create a root reference

export const storage = getStorage(app);



// FIREBASE AUTH

export const auth = firebase.auth()








