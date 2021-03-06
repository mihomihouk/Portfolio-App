import { useState, useEffect, useRef } from "react";
import { db } from "../../src/firebase/config";

//firebase imports
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
  where,
  Query,
  DocumentData,
} from "firebase/firestore";

export const useCollection = (
  c: string,
  newOrder?: [string, "desc"],
  newLimit?: number,
  newQuery?: [string, "==", string]
) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const order = useRef(newOrder).current;
  const l = useRef(newLimit).current;
  const q = useRef(newQuery).current;

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsPending(true);
      setError(null);
      try {
        let ref: Query<DocumentData> = collection(db, c);
        if (order) {
          ref = query(ref, orderBy(...order));
        }

        if (l) {
          ref = query(ref, limit(l));
        }

        if (q) {
          ref = query(ref, where(...q));
        }

        onSnapshot(ref, (snapshot) => {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          if (isMounted) {
            setDocuments(results);
            setError(null);
            setIsPending(false);
          }
        });
      } catch (error) {
        if (isMounted) {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [c, order, q, l]);

  return { documents, isPending, error };
};
