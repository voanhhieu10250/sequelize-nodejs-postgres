const { Sequelize } = require("sequelize");
const { DB, HOST, PASSWORD, USER, dialect } = require("../configs/db.config");
const { createStudentModel } = require("./student.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
  port: 5432,
});

// const sequelize = new Sequelize(
//   "postgres://postgres:12345678@database-1.cszwereq8khp.us-east-1.rds.amazonaws.com:5432/database-1"
// );

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
checkConnection();
const Student = createStudentModel(sequelize);

module.exports = {
  sequelize,
  Student,
};
