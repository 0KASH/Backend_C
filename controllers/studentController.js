import Student from "../models/Student.js";
import asyncHandler from "../utils/asyncHandler.js";

const getStudents = asyncHandler(async (req, res) => {

  const students = await Student.find();

  res.status(200).json(students);

});

const createStudent = asyncHandler(async (req, res) => {

  const student = await Student.create(req.body);

  res.status(201).json(student);

});

const getStudentById = asyncHandler(async (req, res) => {

  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);

});

const updateStudent = asyncHandler(async (req, res) => {

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);

});

const deleteStudent = asyncHandler(async (req, res) => {

  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json({
    message: "Student deleted successfully"
  });

});

export {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
};