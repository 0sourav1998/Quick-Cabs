import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const VehiclePanel = ({setVehiclePanel , setConfirmRidePanel}) => {
  return (
    <div>
      <h5
        onClick={() => setVehiclePanel(false)}
        className="p-3 text-center absolute top-4 right-0"
      >
        <IoIosArrowDown size={24} />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose A Vehicle</h3>
      <div onClick={()=>setConfirmRidePanel(true)} className="flex w-full border-2 border-gray-200 hover:border-black mb-2 rounded-xl items-center justify-between p-3 transition hover:shadow-md">
        <img
          className="h-12 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt="UberGo"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium flex items-center gap-2 text-base text-gray-800">
            <span>UberGo</span>
            <span className="ml-2 flex items-center gap-2 text-gray-500">
              <FaUserAlt /> 4
            </span>
          </h4>
          <h5 className="font-medium text-sm text-gray-600">2 mins away</h5>
          <p className="font-normal text-xs text-gray-500">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Rs: 193</h2>
      </div>

      <div onClick={()=>setConfirmRidePanel(true)} className="flex w-full border-2 border-gray-200 hover:border-black mb-2 rounded-xl items-center justify-between p-3 transition hover:shadow-md">
        <img
          className="h-12 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
          alt="Moto"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium flex items-center gap-2 text-base text-gray-800">
            <span>Moto</span>

            <span className="ml-2 flex items-center gap-2 text-gray-500">
              <FaUserAlt /> 1
            </span>
          </h4>
          <h5 className="font-medium text-sm text-gray-600">3 mins away</h5>
          <p className="font-normal text-xs text-gray-500">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Rs: 65</h2>
      </div>

      <div onClick={()=>setConfirmRidePanel(true)} className="flex w-full border-2 border-gray-200 hover:border-black mb-2 rounded-xl items-center justify-between p-3 transition hover:shadow-md">
        <img
          className="h-12 object-contain"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="Auto"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium flex items-center gap-2 text-base text-gray-800">
            <span>Auto</span>
            <span className="ml-2 flex items-center gap-2 text-gray-500">
              <FaUserAlt /> 1
            </span>
          </h4>
          <h5 className="font-medium text-sm text-gray-600">3 mins away</h5>
          <p className="font-normal text-xs text-gray-500">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Rs: 118.68</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
