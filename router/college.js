const express = require('express');
const router = express.Router();
const Colleges = require('../model/college');

router.get("/", (req, res) => {
    Colleges.find().then(college => res.json(college)).catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;