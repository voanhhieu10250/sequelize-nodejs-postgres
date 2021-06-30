const express = require("express");
const {
  createStudent,
  getListStudent,
  getStudentDetailById,
  updateStudentById,
  deleteStudentById,
} = require("../controllers/student.controllers");
const studentRouter = express.Router();

// lấy danh sách học sinh
studentRouter.get("/", getListStudent);
// lấy thông tin chi tiết học sinh
studentRouter.get("/:id", getStudentDetailById);
// thêm học sinh
studentRouter.post("/", createStudent);
// cập nhật học sinh
studentRouter.put("/:id", updateStudentById);
// xóa học sinh
studentRouter.delete("/:id", deleteStudentById);

module.exports = studentRouter;
