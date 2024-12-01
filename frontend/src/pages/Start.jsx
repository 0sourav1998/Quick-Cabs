import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

const Start = () => {
  return (
    <div className="bg-cover bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex flex-col justify-between">
      <img
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        className="w-16 h-12 ml-8"
      />
      <div className="bg-white p-4">
        <h2 className="font-3xl font-bold">Get Started With Google</h2>
        <div className="flex justify-between items-center">
          <Link
            to="/login"
            className="w-full flex justify-between items-center bg-black text-white text-center py-3 px-4 rounded mt-2"
          >
            Continue
            <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
