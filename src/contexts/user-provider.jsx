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
import { toasty } from "../components/toasty";

import { app } from "../firebase/app";
const auth = getAuth(app);
const User = createContext({});
export const useUser = () => useContext(User);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        console.log("No previous user found...");
      }
      setIsUserLoaded(true);
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
      () => {
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
        isUserLoaded,
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
