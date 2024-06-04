const express = require('express');
const controllerStudent = require('../controllers');
const router = express.Router();


router.get("/", (req,res) => {
    res.status(200).json({success: "racine API"});
});

router.get("/students", controllerStudent.findAll);

router.post("/student", controllerStudent.create)

router.get("/random", controllerStudent.random);

module.exports = router;