import React from 'react'
import { db } from "../src/firebase/config"
import { collection, getDocs } from "firebase/firestore"


function test() {
  const colRef = collection(db, "test")

  getDocs(colRef).then(snapshot =>console.log(snapshot.docs))
  return (
    <>
    </>
  )
}

export default test