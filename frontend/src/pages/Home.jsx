import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehicleRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRideRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);
  const WaitingForDriverRef = useRef(null)

  const panelRef = useRef();
  const panelCloseRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "75%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (!vehiclePanel) {
        gsap.to(vehicleRef.current, {
          transform: "translateY(100%)",
        });
      } else {
        gsap.to(vehicleRef.current, {
          transform: "translateY(0)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (!vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      } else {
        gsap.to(vehicleFound.current, {
          transform: "translateY(0)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (!confirmRidePanel) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (!vehicleFound) {
        gsap.to(vehicleRef.current, {
          transform: "translateY(100%)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (!waitingForDriverPanel) {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      } else {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      }
    },
    [waitingForDriverPanel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="h-screen w-screen">
        <img
          className="object-cover h-full w-full"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584766993-KD4G7Q9XDVVHE7EFE1JF/Two+Maps+-+Grayscale.png"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[25%] p-5 bg-white relative">
          <h5
            className="absolute top-4 right-4 text-2xl"
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
          >
            <RiArrowDownWideFill />
          </h5>
          <h4 className="text-xl font-semibold">Find A Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 bg-black top-[40%] left-10"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              placeholder="add a pick up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              placeholder="Enter Your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehicleRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12"
      >
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div
        ref={confirmRideRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12"
      >
       <ConfirmedRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div
      ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12"
      >
       <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div
      ref={WaitingForDriverRef}
        className="fixed w-full z-10 bottom-0  bg-white p-3 py-6 px-3 pt-12"
      >
       <WaitingForDriver waitingForDriverPanel={waitingForDriverPanel}/>
      </div>
    </div>
  );
};

export default Home;
