import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import Main from "../components/Main";
import { appContext } from "../App";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, userdata } = useContext(appContext);

  return (
    <div className="text-white w-full p-8">
      <nav className="w-full flex flex-row items-center gap-8">
        <button className="bg-[#3F3F46] w-[60%] h-12 rounded  flex items-center flex-row gap-2 ">
          <Icon
            icon="material-symbols:search"
            className="ml-3 w-6 h-6 text-white/60"
          />
          <input
            type="text"
            className="bg-transparent w-full outline-none text-white/60 text-base"
            placeholder="search..."
          />
        </button>

        <Icon icon="mdi:cart-outline" className="w-7 h-7" />
        <Icon icon="lets-icons:chat-fill" className="w-7 h-7" />
        <div className="">
          {!user ? (
            <div className="flex flex-row items-center gap-2">
              <Icon
                icon="carbon:user-avatar-filled-alt"
                className="w-12 h-12"
              />
              <Link to="/login">
                <button className="border-2 p-3 w-24 text-center hover:text-zinc-900 hover:bg-white transition-all justify-center items-center ml-4 h-12 font-semibold">
                  Log In
                </button>
              </Link>
              <Link to="/signin">
                <button className="border-2 p-3 w-24 text-center text-zinc-900 bg-white hover:text-white hover:bg-zinc-900 transition-all justify-center items-center ml-4 h-12 font-semibold">
                  Sign In
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-row gap-2">
              <img
                src={userdata?.userImage}
                alt=""
                className="w-12 h-12   rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl">{userdata?.userName}</h1>
                <p className="text-sm">{userdata?.email}</p>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Main />
    </div>
  );
};

export default Home;
