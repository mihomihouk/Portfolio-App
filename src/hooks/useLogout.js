import { useState } from "react"
import { userState } from "../context/userState"
import { useResetRecoilState } from "recoil"
import { useRouter } from "next/router"

//firebase
import { db, auth } from "../firebase/config"
import { signOut } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"

export const useLogout = () => {
  const resetUser = useResetRecoilState(userState)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

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
      resetUser()
      router.push("/login")
      
    }catch(error){

      setError(error.message)
      setIsPending(false)
    }

    

  }

  return { logout, isPending, error }
}