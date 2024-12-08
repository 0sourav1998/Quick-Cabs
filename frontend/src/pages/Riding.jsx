import React from "react";
import { CiHome, CiLocationOn, CiMoneyBill, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Home Button */}
      <Link
        to={"/home"}
        className="fixed right-4 top-4 h-12 w-12 bg-white shadow-lg flex items-center justify-center rounded-full hover:bg-gray-100 transition"
      >
        <CiHome className="text-xl font-medium text-gray-700" />
      </Link>

      {/* Map Image */}
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584766993-KD4G7Q9XDVVHE7EFE1JF/Two+Maps+-+Grayscale.png"
          alt="Map"
        />
      </div>

      {/* Ride Details */}
      <div className="h-1/2 bg-gray-50 p-6 rounded-t-3xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          {/* Driver Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
            alt="Driver"
            className="h-20 w-20 rounded-full border-2 border-gray-300 shadow"
          />
          {/* Driver Info */}
          <div className="text-right">
            <h2 className="text-lg font-medium text-gray-800">Sourav</h2>
            <h4 className="text-xl font-semibold text-gray-900">MP04 AB 1234</h4>
            <p className="text-sm text-gray-500">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 border-b pb-3">
            <CiLocationOn className="text-xl text-green-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
              <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b pb-3">
            <CiUser className="text-xl text-blue-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Passenger</h3>
              <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CiMoneyBill className="text-xl text-yellow-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Rs: 193.20</h3>
              <p className="text-sm text-gray-500">Cash</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full mt-6 bg-green-600 text-white font-semibold text-lg py-3 rounded-lg shadow hover:bg-green-700 transition">
          Make A Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
