import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/app";
const auth = getAuth(app);
const User = createContext({});
export const useUser = () => useContext(User);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("🚀 > onAuthStateChanged > user", user);
        // ...
      } else {
        console.log("No previous user found...");
      }
    });

    return () => {};
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("🚀 > .then > result", result);
      })
      .catch((error) => {
        console.log("🚀 > googleSignIn > error", error);
      });
  };

  return (
    <User.Provider value={{ user, googleSignIn }}>{children}</User.Provider>
  );
};

export default UserProvider;
