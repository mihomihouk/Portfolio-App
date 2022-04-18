import { useState } from "react"
//firebase
import { db, auth } from "../firebase/config"
import { signOut } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"

export const useLogout = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const logout = async() => {
    try {
      setError(false)
      setIsPending(true)

      //update online status
      const uid = auth.currentUser.uid
      const docRef = doc(db, "users", uid)
      await updateDoc(docRef, {
        online:false
      })
      
      await signOut(auth)
      setIsPending(false)
      
    }catch(error){
      setError(error.message)
      setIsPending(false)
    }
  }

  return { logout, isPending, error }
}