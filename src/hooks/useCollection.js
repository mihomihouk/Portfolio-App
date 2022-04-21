import { useState, useEffect, useRef } from "react"
import { db } from "../../src/firebase/config"

//firebase imports
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"

export const useCollection = (c, newOrder, newQuery) => {
  const [documents, setDocuments] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const q = useRef(newQuery).current
  const order = useRef(newOrder).current

  useEffect(() => {
    const fetchData = async() => {
      setIsPending(true)
      setError(null)
      try{
        let ref = collection(db, c)
        if(order){
          ref = query(ref,orderBy(...order))
        }
    
        if(q){
          ref = query(ref,where(...q))
        }
    
        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
              results.push({...doc.data(), id:doc.id})
            })
            setDocuments(results)
            setError(null)
          setIsPending(false)
        })
        return () => unsub()

      } catch (error) {
        
        setIsPending(false)
        setError("Could not fetch the data")
      }
   }
   fetchData()
  },[c, order, q])

  return { documents, isPending, error }
}
