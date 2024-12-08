import React, { useState } from "react";
import { CiLocationOn, CiMoneyBill, CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const ConfirmRidePopup = ({ setConfirmRidePopupPanel, setRidePopupPanel }) => {
  
  const [otp, setOtp] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault();
  }

  return (
    <div>
      <h5
        onClick={() => {
          setRidePopupPanel(false);
        }}
        className="p-3 text-center absolute top-4 right-0 cursor-pointer"
      >
        <IoIosArrowDown size={24} />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm The Ride To Start</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-xl font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <CiLocationOn className="text-lg" />
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab , Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2">
            <CiUser className="text-lg" />
            <div className="">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talab , Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2" p-2 border-b-2>
            <CiMoneyBill className="text-lg" />
            <div className="">
              <h3 className="text-lg font-medium">Rs : 193.20</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form onSubmit={(e)=>submitHandler(e)}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" type="text" className="bg-[#eee] px-12 py-4 font-mono rounded-md text-lg w-full mt-2 outline-none focus-within:ring-2 focus-within:ring-blue-500"/>
            <Link
              to={"/captain-riding"}
              className="flex text-lg justify-center w-full mt-12 bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                setConfirmRidePopupPanel(false);
                setRidePopupPanel(false);
              }}
              className="w-full text-lg mt-3 bg-red-500 text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ConfirmRidePopup;
