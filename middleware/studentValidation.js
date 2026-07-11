import { body } from "express-validator";

const studentValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("phone")
    .notEmpty()
    .withMessage("Phone is required"),

  body("course")
    .notEmpty()
    .withMessage("Course is required"),
];

export default studentValidation;