import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainWrapper = ({ children }) => {
  const captainToken = localStorage.getItem("captain-token");
  const navigate = useNavigate();
  console.log("TOKEN", captainToken);
  useEffect(() => {
    if (!captainToken) {
      navigate("/captain-login");
    }
  }, [captainToken, navigate]);
  return <>{children}</>;
};

export default CaptainWrapper;
