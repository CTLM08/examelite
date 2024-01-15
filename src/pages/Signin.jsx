import React, { useContext, useState } from "react";
import { signInWithGoogle } from "../firebase";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { signInWithEmail } from "../firebase";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, navigate } = useContext(appContext);
  const [error, setError] = useState(null);
  return (
    <div className="flex justify-center h-screen w-full items-center">
      <main className="absolute bg-zinc-700/50  w-96 rounded-md  justify-center items-center flex p-5 flex-col">
        <h1 className="text-white text-3xl  mb-10">Register a account</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className=" outline-none w-full mb-10 bg-zinc-800/80 text-white p-3 h-12 font-semibold focus:border-b-2 border-white"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" outline-none w-full mb-10 bg-zinc-800/80 text-white p-3 h-12 font-semibold focus:border-b-2 border-white"
          placeholder="Email adress"
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className=" outline-none w-full mb-10 bg-zinc-800/80 text-white p-3 h-12 font-semibold focus:border-b-2 border-white"
          placeholder="Password"
        />
        <p className="text-sm text-[#d04236]">{error ? error : ""}</p>
        <button
          onClick={() => {
            signInWithEmail(setError, navigate, email, password, username);
          }}
          className="text-white mt-2 w-full border-2 hover:bg-white hover:text-zinc-900 transition-all border-white h-11 font-semibold flex items-center justify-center gap-2 hover:gap-4 flex-row"
        >
          <p>Register</p>
          <Icon icon="ph:arrow-up" rotate={1} className="w-6 h-6" />
        </button>
        <button
          onClick={() => signInWithGoogle()}
          className="text-white w-full mt-6 bg-[#d04236] h-11 font-semibold flex items-center justify-center gap-2 flex-row"
        >
          <Icon icon="icon-park-outline:google" className="w-6 h-6" />
          <p> Login with Google</p>
        </button>
        <p className="text-white text-sm mt-3">
          have a account?
          <Link
            to="/login"
            className="text-blue-300 ml-2 border-b-2 border-blue-300"
          >
            go login
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Signin;
