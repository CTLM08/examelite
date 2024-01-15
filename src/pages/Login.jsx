import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { logInWithEmail, signInWithGoogle } from "../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <div className="flex justify-center h-screen w-full items-center">
      <main className="absolute bg-zinc-700/50  w-96 rounded-md  justify-center items-center flex p-5 flex-col">
        <h1 className="text-white text-3xl  mb-10">Login to Examelite</h1>
        <input
          className=" outline-none w-full mb-10 bg-zinc-800/80 text-white p-3 h-12 font-semibold focus:border-b-2 border-white"
          placeholder="Email adress"
        />
        <input
          className=" outline-none w-full mb-10 bg-zinc-800/80 text-white p-3 h-12 font-semibold focus:border-b-2 border-white"
          placeholder="Password"
        />
        <button
          onClick={() => {
            logInWithEmail(setError, email, password);
          }}
          className="text-white w-full border-2 hover:bg-white hover:text-zinc-900 transition-all border-white h-11 font-semibold flex items-center justify-center gap-2 hover:gap-4 flex-row"
        >
          <p> Login</p>
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
          havent create a account?
          <Link
            to="/signin"
            className="text-blue-300 ml-2 border-b-2 border-blue-300"
          >
            go register
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Login;
