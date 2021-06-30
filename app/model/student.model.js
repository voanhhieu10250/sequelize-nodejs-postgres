const { DataTypes, Sequelize } = require("sequelize");

const createStudentModel = (sequelize) => {
  return sequelize.define(
    "Student",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "students",
      timestamps: true,
    }
  );
};

module.exports = {
  createStudentModel,
};
