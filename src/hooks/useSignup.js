import { useState } from "react"
import { useRouter } from "next/router"

//firebase 
import { auth, storage, db } from "../firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"


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

      //upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const thumbnailRef = ref(storage, uploadPath)
      await uploadBytes(thumbnailRef, thumbnail)
      const imgUrl = await getDownloadURL(ref(storage,thumbnailRef))

      //add display name and photoURL to user
      await updateProfile(res.user, { displayName, photoURL:imgUrl })
      
      //crete a user document
      const docRef = doc(db, "users", res.user.uid)
      const data = {
        online: true,
        displayName,
        photoURL: imgUrl
      }

      await setDoc(docRef, data)
      
      setIsPending(false)
      setError(null)
      router.push("/dashboard")

    } catch (error){

      setError("Could not complete signup")
      setIsPending(false)
    }
  }
  return { error, isPending, signup }
}