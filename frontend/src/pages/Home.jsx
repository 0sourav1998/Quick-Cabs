import React, { useRef, useState } from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import { RiArrowDownWideFill } from "react-icons/ri";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef();
  const panelCloseRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height : "70%"
      })
      gsap.to(panelCloseRef.current,{
        opacity : 1
      })
    }else{
      gsap.to(panelRef.current,{
        height : "0%"
      })
      gsap.to(panelCloseRef.current,{
        opacity : 0
      })
    }
  },[panelOpen])

  return (
    <div className="h-screen relative">
      <div className="h-screen w-screen">
        <img
          className="object-cover h-full w-full"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584766993-KD4G7Q9XDVVHE7EFE1JF/Two+Maps+-+Grayscale.png"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5 className="absolute top-4 right-4 text-2xl" ref={panelCloseRef} onClick={()=>setPanelOpen(false)}><RiArrowDownWideFill/></h5>
          <h4 className="text-xl font-semibold">Find A Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 bg-black top-[32%] left-10"></div>
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
        <div ref={panelRef} className="h-0 bg-white"></div>
      </div>
    </div>
  );
};

export default Home;
