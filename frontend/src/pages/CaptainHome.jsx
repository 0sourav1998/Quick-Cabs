import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const confirmRidePopupPanelRef = useRef(null)
  const ridePopupPanelRef = useRef(null);
  useGSAP(
    function () {
      if (!ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (!confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50">

      <div className="h-3/5">
        <img
          className="w-full h-full object-cover rounded-b-lg shadow-lg"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584766993-KD4G7Q9XDVVHE7EFE1JF/Two+Maps+-+Grayscale.png"
          alt="Map"
        />
      </div>

      <div className="h-2/5 bg-white p-6 rounded-t-lg shadow-lg">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12"
      >
        <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full z-10 h-screen bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12"
      >
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
