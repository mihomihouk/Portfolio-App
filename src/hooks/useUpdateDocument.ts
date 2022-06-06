import { useEffect, useState } from "react";
//firebase imports
import { updateDoc } from "firebase/firestore";

export const useUpdateDocument = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleUpdate = async (ref, data) => {
    setError(null);
    setIsPending(true);
    try {
      await updateDoc(ref, {
        ...data,
      });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError("Could not update the data");
        setIsPending(false);
        console.error(error);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { handleUpdate, isPending, error };
};
