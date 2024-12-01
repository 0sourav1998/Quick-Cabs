import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  console.log("USER", user);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user/login`,
      userData
    );
    if (response && response.data.success) {
      setUser(response.data.user);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col h-screen justify-between">
      <div>
        <img
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          className="w-16 h-12 mb-7"
        />
        <form onSubmit={(e) => submitHandler(e)}>
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
            Login
          </button>
        </form>
        <p className="text-center">
          New here ?{" "}
          <Link to="/signup" className="text-blue-600">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center  text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg"
        >
          Sign In As Captain
        </Link>
      </div>
    </div>
  );
};

export default Login;
