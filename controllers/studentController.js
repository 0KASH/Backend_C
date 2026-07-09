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

export { getStudents };