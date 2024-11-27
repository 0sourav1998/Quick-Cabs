import express from "express";
import { register } from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    body("email")
      .isEmail()
      .withMessage("Should Be a Valid Email")
      .notEmpty()
      .withMessage("Email Cannot be Empty"),
    body("firstName")
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters")
      .notEmpty()
      .withMessage("First Name is Required"),
    body("password").notEmpty().withMessage("Password Field is Required"),
  ],
  register
);

export default router;
