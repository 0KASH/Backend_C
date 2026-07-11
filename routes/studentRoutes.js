import express from "express";
import {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
} from "../controllers/studentController.js";

import studentValidation from "../middleware/studentValidation.js";
import validate from "../middleware/validate.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/",authMiddleware, getStudents);

router.post("/", studentValidation, validate, createStudent);

router.get("/:id", getStudentById);

router.put("/:id", studentValidation, validate, updateStudent);

router.delete("/:id", deleteStudent);

export default router;