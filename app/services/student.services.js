const { Student } = require("../model");

const getList = async () => {
  const studentList = await Student.findAll();
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};

const create = async (student) => {
  const newStudent = await Student.create(student);
  return newStudent;
};

const getDetail = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  if (student) {
    return student;
  } else {
    return false;
  }
};

const update = async (id, student) => {
  const studentUpdate = await getDetail(id);
  if (studentUpdate) {
    studentUpdate.fullName = student.fullName;
    studentUpdate.age = student.age;
    studentUpdate.numberClass = student.numberClass;
    const studentUpdated = await studentUpdate.save();
    return studentUpdated;
  } else {
    return false;
  }
};

const deleteById = async (id) => {
  const studentDelete = await getDetail(id);

  if (studentDelete) {
    await Student.destroy({
      where: {
        id,
      },
    });
    return studentDelete;
  } else {
    return false;
  }
};

module.exports = {
  create,
  getList,
  getDetail,
  update,
  deleteById,
};
