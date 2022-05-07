import { useState } from "react";
//firebase imports
import { updateDoc } from "firebase/firestore";

export const useUpdateDocument = () => {
  const [error, setError] = useState(null);

  const handleUpdate = async (ref, data) => {
    try {
      const res = await updateDoc(ref, {
        ...data,
      });
    } catch (error) {
      setError("Could not update the data");
      console.error(error);
    }
  };

  return { handleUpdate, error };
};
