import React, { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const appContext = createContext({
  user: null,
  userdata: null,
  setUser: () => {},
  setUserdata: () => {},
  navigate: () => {},
});
const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userdata, setUserdata] = useState(null);
  const location = useLocation();
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setUser(_user);
        navigate("/");
        getDoc(doc(firestore, "user", _user.uid)).then((_doc) => {
          setUserdata(_doc.data());
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <appContext.Provider
      value={{
        user,
        userdata,
        setUser,
        setUserdata,
        navigate,
      }}
    >
      {" "}
      <div className="h-screen w-full bg-zinc-900 flex flex-row">
        <>
          {location.pathname !== "/login" && location.pathname !== "/signin" ? (
            <Navbar />
          ) : null}
        </>
        <Routes className="">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </appContext.Provider>
  );
};

export default App;
