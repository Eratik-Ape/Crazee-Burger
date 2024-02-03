import { doc, getDoc, setDoc } from "firebase/firestore";
import { fakeMenu } from './../fakeData/fakeMenu';
import { db } from './firebase-config';

export const getUser = async (idUser) => { 
  const docRef = doc(db, "users", idUser)

  const docSnapshot = await getDoc(docRef)
  if(docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    return userReceived
  }
 }

 export const createUser = async (userId) => { 

  const docRef = doc(db, "users", userId)
  const newUserToCreate = {
    username: userId,
    menu: fakeMenu.SMALL,
  }

  await setDoc(docRef, newUserToCreate)
  return newUserToCreate
  }

  export const authenticateUser = async (userId) => { 
    const existingUser = await getUser(userId)

    if(!existingUser) {
      return await createUser(userId)
    }
    return existingUser
  }