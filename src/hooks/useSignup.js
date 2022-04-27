import { useState } from "react"
import { useRouter } from "next/router"

//firebase 
import { auth, storage, db } from "../firebase/config"
import { setDoc, doc } from "firebase/firestore"
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
      const userData = {
        online: true,
        displayName,
        id: res.user.uid,
        photoURL: imgUrl,
      }
      await setDoc(doc(db, "users", res.user.uid), userData)
      setIsPending(false)
      setError(null)
      await router.push("/dashboard")

    } catch (error){
      console.error(error)
      setError("Could not complete signup")
      setIsPending(false)
    }
  }
  return { error, isPending, signup }
}