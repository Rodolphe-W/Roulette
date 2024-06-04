const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect');


const Student = sequelize.define(
    'Student',
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      // Other model options go here
      freezeTableName: true
    },
  );
  
  // `sequelize.define` also returns the model
  //console.log(Music === sequelize.models.Music); // true

 

  module.exports = Student;