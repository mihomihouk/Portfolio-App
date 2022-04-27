import { useRouter } from "next/router";
import { useEffect } from "react";
//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const Auth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      }
    });
  }, []);
  return children;
};

export default Auth;
