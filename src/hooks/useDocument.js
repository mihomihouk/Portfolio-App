import { useEffect, useState } from "react";
import { db } from "../firebase/config";

//firebase imports
import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsPending(true);

      const unsub = await onSnapshot(
        doc(db, c, id),
        (doc) => {
          setDocument({ ...doc.data(), id: doc.id });
          setError(null);
          setIsPending(false);
        },
        (err) => {
          setError("failed to get document");
          setIsPending(false);
        }
      );
      return () => unsub();
    };
    fetchData();
  }, [c, id]);

  return { document, isPending, error };
};
