const express = require('express');
const router = express.Router();
const students = require('../model/student');

router.get("/", (req, res) => {
    students.find().then(student => res.json(student)).catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;