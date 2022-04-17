import { useState } from "react"
//firebase
import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"

export const useLogout = () => {

  const [error, setError] = useState("")

  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log("user signed out")
      })
      .catch((error) => {
        console.log(err.message)
      })
  }

  return { logout, error }
}