import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Captain from "../models/captain.model.js";

export const isAuthenticated = async (req, res, next) => {
  const token =
    req.cookies.token || req.header("Authorization").replace("Bearer ", "")
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "User Not Authenticated",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decode._id;
    const user = await User.findById(userId);
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "User Not Authenticated",
    });
  }
};


export const isCaptainAuthenticated = async(req,res,next)=>{
  const token =
    req.cookies.token || req.header("Authorization").replace("Bearer ", "")
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Captain Not Authenticated",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const captainId = decode._id;
    const captain = await Captain.findById(captainId);
    req.captain = captain;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Captain Not Authenticated",
    });
  }
}