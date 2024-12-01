import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  console.log(user);

  const submitHandler = async(e) => {

    e.preventDefault();
    const newUserData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user/register`,
      newUserData
    );
    console.log("RESPONSE",response)
    if (response && response.data.success) {
      setUser({
        fullName: {
          firstName: response.data.user.fullName.firstName,
          lastName: response.data.user.fullName.lastName,
        },
        email: response.data.user.email,
      });
      navigate("/");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="p-7 flex flex-col h-screen justify-between">
      <div>
        <img
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          className="w-16 h-12 mb-7"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's Your Name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
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
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already Have an Account ?{" "}
          <Link to="/login" className="text-blue-600">
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

export default SignUp;
