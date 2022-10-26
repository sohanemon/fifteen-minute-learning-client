import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

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
    return signInWithPopup(auth, provider).catch((error) => {
      console.log("🚀 > googleSignIn > error", error);
    });
  };
  const githubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider).catch((error) => {
      console.log("🚀 > googleSignIn > error", error);
    });
  };
  const emailSignUp = async (data) => {
    return createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: data.photoURL,
        });
      }
    );
  };
  const emailSignIn = (data) => {
    return signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const logOut = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <User.Provider
      value={{
        user,
        logOut,
        googleSignIn,
        githubSignIn,
        emailSignUp,
        emailSignIn,
      }}
    >
      {children}
    </User.Provider>
  );
};

export default UserProvider;
