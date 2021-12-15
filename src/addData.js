import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "./Utils/Firebase";

export const addNewUser = async(user) => {
try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
    });
  console.log("Document written with ID: ", docRef.id);
    }
 catch (e) {
    console.error("Error adding document: ", e);
    }
}


export const querySnapshot = async () => {
    const getData = await getDocs(collection(db, "users"))
    getData.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}



