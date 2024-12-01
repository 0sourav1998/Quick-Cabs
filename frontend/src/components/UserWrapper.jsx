import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const UserWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log("TOKEN", token);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  return <>{children}</>;
};

export default UserWrapper;
