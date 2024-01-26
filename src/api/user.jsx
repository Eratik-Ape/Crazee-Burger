import { doc, getDoc, setDoc } from "firebase/firestore";
import { fakeMenu } from './../fakeData/fakeMenu';
import { db } from './firebase-config';

export const getUser = async (idUser) => { 
  const docRef = doc(db, "users", idUser)

  const docSnapshot = await getDoc(docRef)
  console.log("docSnapshot: ", docSnapshot)
  if(docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    console.log("userReceived: ", userReceived)
  }
 }

 export const createUser = (userId) => { 

  const docRef = doc(db, "users", userId)
  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
  }

  setDoc(docRef, newDoc)
  }