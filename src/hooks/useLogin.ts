import { useState } from "react";
import { useRouter } from "next/router";

//firebase
import { db, auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const login = async (email, password) => {
    try {
      setIsPending(true);
      setError(null);

      //log the user in
      const res = await signInWithEmailAndPassword(auth, email, password);

      //update online status
      const docRef = doc(db, "users", res.user.uid);
      await updateDoc(docRef, {
        online: true,
      });

      setIsPending(false);
      await router.push("/dashboard");
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };
  return { error, isPending, login };
};
