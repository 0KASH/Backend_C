import Student from "../models/Student.js";

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createStudent = async (req, res) => {
   try {
    const student = await Student.create(req.body);

    res.status(201).json(student);

    } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    res.status(200).json(student);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      req.body,
      {
          returnDocument: "after"
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(updatedStudent);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent
};