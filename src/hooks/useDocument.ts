import { useEffect, useState } from "react";
import { db } from "../firebase/config";

//firebase imports
import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setError(null);
      setIsPending(true);

      onSnapshot(
        doc(db, c, id),
        (doc) => {
          if (isMounted) {
            setDocument({ ...doc.data(), id: doc.id });
            setError(null);
            setIsPending(false);
          }
        },
        (err) => {
          if (isMounted) {
            setError("failed to get document");
            setIsPending(false);
          }
        }
      );
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [c, id]);

  return { document, isPending, error };
};
