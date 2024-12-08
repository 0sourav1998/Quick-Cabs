import React from "react";
import { CiLocationOn, CiMoneyBill, CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const WaitingForDriver = ({waitingForDriverPanel }) => {
  return (
    <div>
      <h5
        onClick={() => waitingForDriverPanel(false)}
        className="p-3 text-center absolute top-4 right-0"
      >
        <IoIosArrowDown size={24} />
      </h5>
      <div className="flex items-center justify-between">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt=""
          className="h-16"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Sourav</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>

          <p className="font-sm text-gray-600">Maruti Suzuki Altu</p>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
