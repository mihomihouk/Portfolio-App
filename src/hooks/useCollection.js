import { useState, useEffect } from "react"
import { db } from "../../src/firebase/config"

//firebase imports
import { collection, onSnapshot, orderBy, query} from "firebase/firestore"

export const useCollection = (c, order) => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)

    if(order){
      ref = query(ref,orderBy(...order))
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id:doc.id})
      })
      setDocuments(results)
    })

    return () => unsub()
  },[c, orderBy])

  return { documents }
}
