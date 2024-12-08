import React from "react";
import { CiLocationOn, CiMoneyBill, CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const LookingForDriver = () => {
  return (
    <div>
      <h5
        onClick={() => setVehicleFound(false)}
        className="p-3 text-center absolute top-4 right-0"
      >
        <IoIosArrowDown size={24} />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking For A Driver</h3>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt=""
          className="h-20"
        />
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
      </div>
    </div>
  );
};

export default LookingForDriver;
