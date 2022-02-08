
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, getDoc
   ,addDoc, writeBatch, deleteDoc, doc, listDocuments, where
  } from 'firebase/firestore'
import dummyData from '../Utils/CompanyDataSet';
import {companyValuesArr} from '../Utils/CompanyDataSet'
import { getStorage, ref, uploadBytes } from "firebase/storage";
// const functions = require('firebase-functions');
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
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
  export const db = getFirestore(app);

  // get a ref to specific collection in the db
  export const userRef = collection(db, "userData");
  export const companyRef = collection(db, "companies");

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
  snapshot.forEach(doc => console.log(doc))
  // let companyData = [];
  // snapshot.docs.forEach(doc => {
  //   companyData.push({...doc.data(), id: doc.id})
  // })
  // console.log(companyData);
}
// getCompanyData()

// // function that adds data to user collection
// export const addData = async () => {
//   try {
//     const newData = await addDoc(userRef, {
//       name: 'rori',
//       age: 55
//     })
//     console.log(newData, 'success!')
//   } catch (e) {
//     console.error(e)
//   }
// }

const batch = writeBatch(db);

// slice(lowerRange, upperRange) on companyValuesArr will randomly slice values that will be apportioned to dummyData
// the random slice generator will be assigned to obj.companyValues prop
// loop over all the company in dummyData and randomly assign a slice from companyValuesArr to the obj.companyValues prop

const updateDbWithNewFieldValues = () => {
  dummyData.map(async (obj) => {
  // random num from [0, 20]. This will be lower bound 
  let lowerRange = Math.floor(Math.random() * 20)
  // another random num. This will be upper bound [20, 46]
  let min = 20;
  let upper = Math.floor(Math.random() * 26)
  let upperRange = min + upper;
  // randomly slice the arr for each object and iteration in dummyData
  let randSlice = companyValuesArr.slice(lowerRange, upperRange);
  // set randSlice to be under the companyValues prop of each obj
  obj.companyValues = randSlice;
  // add the obj to the companyRef collection in db
  const result = await addDoc(companyRef, obj);
  console.log(result);
  await batch.commit();
  });
}

// create a root reference

export const storageRef = getStorage(app);

// FIREBASE AUTHORIZATION INSTANCE

export const auth = firebase.auth()








