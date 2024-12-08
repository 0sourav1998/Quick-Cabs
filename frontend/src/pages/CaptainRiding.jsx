import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(
        function () {
          if (!finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0)",
            });
          }
        },
        [finishRidePanel]
      );

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="h-4/5 relative">
        <img
          className="w-full h-full object-cover rounded-b-lg shadow-lg"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584766993-KD4G7Q9XDVVHE7EFE1JF/Two+Maps+-+Grayscale.png"
          alt="Map"
        />
        <Link
          to={"/captain-home"}
          className="inline-block bg-gray-400 p-2 rounded-full absolute top-4 right-6"
        >
          <IoMdExit size={32} />
        </Link>
      </div>

      <div onClick={()=>{
        setFinishRidePanel(true)
      }} className="h-1/5 relative flex items-center justify-between bg-yellow-400 p-6 rounded-t-lg shadow-lg">
        <h5
          onClick={() => {
            setRidePopupPanel(false);
          }}
          className="p-3 text-center absolute top-4 right-0 cursor-pointer"
        >
          <IoIosArrowDown size={24} />
        </h5>
        <h4 className="text-xl font-semibold">4 Kms Away</h4>
        <button className="flex justify-center  mt-5 bg-green-600 text-white font-semibold p-3 px-12 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
      ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
