
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, getDoc
   ,addDoc, writeBatch, deleteDoc, doc, listDocuments, where
  } from 'firebase/firestore'
import dummyData from './CompanyDataSet';

const firebaseConfig = {
    apiKey: "AIzaSyC9hnwjS0wv2vvdpG5PTONHlflv7zUQmq4",
    authDomain: "value-search-e62cc.firebaseapp.com",
    projectId: "value-search-e62cc",
    storageBucket: "value-search-e62cc.appspot.com",
    messagingSenderId: "402024752001",
    appId: "1:402024752001:web:04f79539837365c48e7e80",
    measurementId: "G-KNNREB7VYK"
  };

  // initialize app with your config
  const app = initializeApp(firebaseConfig);
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

// function that adds data to collection
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

// batch all of docs and forEach doc, add the doc to the company collection
// func that will loop over dummy data and place in 
// company collection 

// 1. retrieve the entire collection
// getDocs(companyRef)
// .then(querySnapshot => {
//   querySnapshot.docs.forEach(snapshot => {
//   const selectDoc = doc(companyRef)
//   deleteDoc(selectDoc);
//   })
//   console.log('successfully deleted collection!')
// })
// .catch((e) => {
//   console.error(e, 'collection not deleted');
// })

// const deleteDocs = async() => {
//   try {
//     const retrieveDocs = await getDocs(companyRef);
//     retrieveDocs.docs.forEach(snapshot => {
//       const selectDoc = doc(companyRef)
//       console.log(selectDoc)
      
//     })
//     console.log('worked!')
//   } catch (error) {
//     console.error(error, 'nope')
//   }
  
// }
// deleteDocs();

// first locate the doc with the doc() method
const deleteOne = async () => {
  try {
    const docRef = doc(companyRef, '86e9cade14e2a972c526db4b7c828ed7')
    const retrieve = await getDoc(docRef)
    console.log(retrieve)
    await deleteDoc(retrieve)
    if(retrieve.exists()) {
      console.log('still exists')
    } else {
      console.log('it worked!')
    }
  } catch (error) {
    console.error(error, 'nope')
  }
}
// deleteOne()


// 2. log to console 
// 3. clear the collection of company data before the addDoc func is called with a forEach loop

// deleteDoc()


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







