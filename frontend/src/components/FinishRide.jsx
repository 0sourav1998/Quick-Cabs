import React from "react";
import { CiLocationOn, CiMoneyBill, CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const FinishRide = ({setFinishRidePanel}) => {
  return (
    <div>
      <h5
        onClick={() => {
            setFinishRidePanel(false);
        }}
        className="p-3 text-center absolute top-4 right-0 cursor-pointer"
      >
        <IoIosArrowDown size={24} />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish This Ride</h3>
      <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
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
            <Link
              to={"/captain-home"}
              className="flex text-lg justify-center w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Finish Ride
            </Link>
            <p className="text-red-600 text-center font-semibold mt-10 text-xs ">Click on Finish button Ride if You have Completed The Payment</p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
