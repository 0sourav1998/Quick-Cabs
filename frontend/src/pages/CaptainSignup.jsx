import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/captainContext";
import { LoaderIcon, toast } from "react-hot-toast";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const navigate = useNavigate();

  const [captainData, setCaptainData] = useState({});
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      plate: vehiclePlate,
      vehicleType: vehicleType,
      color: vehicleColor,
      capacity: vehicleCapacity,
    });
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/captain/register`,
        captainData
      );
      if (response && response.data.success) {
        setCaptain(response.data.captain);
        navigate("/captain-login");
        toast.success(response.data.message);
      }
      setPassword("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setVehicleCapacity("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleType("");
    } catch (error) {
      const errorMessage = error.response?.data?.errors?.[0]?.msg || error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-7 flex flex-col h-screen justify-between">
      <div>
        <img
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          className="w-16 h-12 mb-7"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">
            What's Our Captain's Name
          </h3>
          <div className="flex gap-4">
            <input
              required
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            />
            <input
              required
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">
            What's Our Captain's Email
          </h3>
          <input
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <input
            required
            type="text"
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          />
          <input
            required
            type="number"
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          />
          <select
            required
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="motorcycle">Bike</option>
            <option value="auto">Auto</option>
          </select>
          <input
            required
            type="text"
            placeholder="Vehicle Plate Number"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            {loading ? <div className="flex w-full justify-center">
              <LoaderIcon className="animate-spin text-center" />
            </div> : "Register"}
          </button>
        </form>
        <p className="text-center">
          Already Have an Account ?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
