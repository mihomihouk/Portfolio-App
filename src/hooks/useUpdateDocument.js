import { useState } from "react";

//firebase imports
import { db, auth } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export const useUpdateDocument = (collection) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleUpdate = async (id, data) => {
    setIsPending(true);
    setError(null);
    try {
      let docRef = doc(db, collection);
      if (id) {
        docRef = doc(db, collection, id);
      }
      const unsub = await updateDoc(docRef, {
        data,
      });
      return () => unsub();
    } catch (error) {
      setError("Could not update the data");
      console.error;
    }
  };

  return { handleUpdate, isPending, error };
};
