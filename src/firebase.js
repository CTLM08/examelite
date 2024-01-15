import firebase from "firebase/compat/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXVNmcqilhvx4wWTXmzGlwBZWlANeyHf8",
  authDomain: "examelite-d0667.firebaseapp.com",
  projectId: "examelite-d0667",
  storageBucket: "examelite-d0667.appspot.com",
  messagingSenderId: "792377992122",
  appId: "1:792377992122:web:21c836b88ddeeb7252f383",
  measurementId: "G-72PC8GG6FP",
};
export const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storage = getStorage(app);
export const auth = firebase.auth();
export const provider = new GoogleAuthProvider();
export const signOut = () => {
  auth.signOut();
};

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then(async ({ user, additionalUserInfo }) => {
      if (additionalUserInfo.isNewUser) {
        await setDoc(doc(firestore, "user", user.uid), {
          userName: user.displayName,
          userImage: user.photoURL,
          email: user.email,
          cart: [],
          // ...
        });
      }
    })
    .catch((error) => {
      throw error;
    });
};
export const signInWithEmail = (
  setError,
  navigate,
  email,
  password,
  username
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const { user } = userCredential;
      await setDoc(doc(firestore, "user", user.uid), {
        userName: username,
        userImage:
          "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        email: email,
        cart: [],
        // ...
      });
      navigate("/");
    })
    .catch((err) => {
      const errorCode = err.code;
      switch (errorCode) {
        case "auth/email-already-in-use":
          setError("email already in use");
          break;
        case "auth/invalid-email":
          setError("invalid email");
          break;
        case "auth/weak-password":
          setError("weak password");
          break;
        default:
          setError("something went wrong");
          break;
      }

      // ..
    });
};
export const logInWithEmail = (setLoginError, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed in
      setUserEmail(email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/invalid-email":
          setLoginError("invalid email");
          break;
        case "auth/user-not-found":
          setLoginError("user not found");
          break;
        case "auth/wrong-password":
          setLoginError("wrong password");
          break;
        default:
          setLoginError("something went wrong");
          break;
      }
    });
};
