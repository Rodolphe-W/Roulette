const sequelize = require('../db/dbConnect');
const Student = require("../models/Student");

const getRandomStudent = (array) =>{
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const controllerStudent = {
    random: async (req,res) => {
        const data = await Student.findAll();
        const randomStudent = getRandomStudent(data);
        res.status(200).json({laroulette: randomStudent});
    },
    create: async (req,res) => {
        const data = await Student.create({
            name: req.body.name
        });
        res.status(201).json({message: "étudiant ajouté", data: req.body});
    },
    findAll: async (req,res) => {
        const data = await Student.findAll();
        res.status(200).json({students: data});
    }



}

module.exports = controllerStudent;