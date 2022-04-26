import { useState } from "react"
import { useRouter } from "next/router"

//firebase 
import { auth, storage, db } from "../firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const signup = async(email, password, displayName, thumbnail) => {
    
    setError(null)
    setIsPending(true)

    try{
      //signup
      const res = await createUserWithEmailAndPassword(auth, email, password)
      // upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const thumbnailRef = ref(storage, uploadPath)
      await uploadBytes(thumbnailRef, thumbnail)
      const imgUrl = await getDownloadURL(ref(storage,thumbnailRef))

      //add display name and photoURL to user
      await updateProfile(res.user, { displayName, photoURL:imgUrl })
      
      //crete a user document
      const userDocRef = doc(db, "users", res.user.uid)
      const userData = {
        online: true,
        displayName,
        photoURL: imgUrl,
      }
      await setDoc(userDocRef, userData)
      await setIsPending(false)
      await setError(null)
      await router.push("/dashboard")

    } catch (error){

      setError("Could not complete signup")
      setIsPending(false)
    }
  }
  return { error, isPending, signup }
}