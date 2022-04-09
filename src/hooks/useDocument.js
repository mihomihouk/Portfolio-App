import { useEffect, useState } from "react"
import { db } from "../firebase/config"

//firebase imports
import { doc, onSnapshot } from "firebase/firestore"

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const docRef = doc(db, c, id)

    const unsub = onSnapshot(docRef, (doc) => {
      setDocument({...doc.data(), id:doc.id})
    },(err) => {
      console.log(err.message)
      setError("failed to get document")
    })

    return () => unsub()

  },[c, id])

  return { document, error }
}