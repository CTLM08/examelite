import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  let arr = [
    {
      name: "Maths",
      icon: "mdi:math-compass",
      amount: 10,
    },
    {
      name: "Physics",
      icon: "mdi:atom",
      amount: 10,
    },
    {
      name: "Chemistry",
      icon: "mdi:flask",
      amount: 10,
    },
    {
      name: "Biology",
      icon: "mdi:leaf",
      amount: 10,
    },
    {
      name: "English",
      icon: "mdi:book-open-page-variant",
      amount: 10,
    },
    {
      name: "Computer Science",
      icon: "mdi:desktop-classic",
      amount: 10,
    },
    {
      name: "Social Science",
      icon: "mdi:earth",
      amount: 10,
    },
    {
      name: "History",
      icon: "mdi:history",
      amount: 10,
    },
    {
      name: "Geography",
      icon: "mdi:map",
      amount: 10,
    },
  ];
  return (
    <div className="bg-zinc-800 w-[20%] h-screen p-4 flex justify-between items-center flex-col text-white">
      <div>
        {" "}
        <p className="mt-4 flex felx-row items-center">
          <h1 className="niubi font-semibold text-5xl ">EX.</h1>
          <p className="text-5xl">ExamElite</p>
        </p>
        <div className="bg-[#3F3F46] w-full h-11 mt-10 rounded  flex items-center flex-row gap-2 ">
          <Icon
            icon="material-symbols:search"
            className="ml-3 w-6 h-6 text-white/60"
          />
          <input
            type="text"
            className="bg-transparent w-full h-full outline-none text-white/60 text-base"
            placeholder="search categories"
          />
        </div>
        <>
          <div className="h-96 overflow-hidden overflow-y-auto w-full mt-7 flex flex-col gap-5">
            {arr.map((item) => (
              <div>
                <div className="flex-row justify-between flex  ">
                  <div className="flex flex-row gap-3">
                    <Icon icon={item.icon} className="w-6 h-6 text-white" />
                    <p>{item.name}</p>
                  </div>
                  <p className="mr-2">{item.amount}</p>
                </div>
                <hr className="mt-1" />
              </div>
            ))}
          </div>
        </>
      </div>
      <div className="w-full flex flex-col  gap-3">
        <button className="flex w-full flex-row  justify-between">
          <div className="flex flex-row items-center gap-2">
            <Icon icon="akar-icons:bell" className="w-6 h-6 " />
            notifications
          </div>

          <div>13</div>
        </button>
        <button className="flex w-full flex-row  justify-between">
          <div className="flex flex-row items-center gap-2">
            <Icon icon="mdi:notebook-love" className="w-6 h-6 " />
            wishlist
          </div>

          <div>13</div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
