import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/captainContext";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/captain/login`,
        captainData
      );
      if (response && response.data.success) {
        setCaptain(response.data.updatedCaptain);
        localStorage.setItem("captain-token", response.data.token);
        navigate("/captain-home");
        toast.success(response.data.message);
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.[0]?.msg || error.message;
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
          <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
          <input
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            {loading ? (
              <div className="flex w-full justify-center">
                <LoaderIcon className="animate-spin text-center size-20" />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center">
          Join a fleet ?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register As A Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center  text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg"
        >
          Sign In As User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
