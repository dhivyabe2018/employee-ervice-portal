const express = require('express');
const EmployeeDbTest = require('../models/employee.model');
const router = express.Router();


router.post("", (req, res, next) => {
  const employeeDbTest = new EmployeeDbTest(req.body);
  console.log('body:'+JSON.stringify(req.body));
  employeeDbTest.save().then(createdEmployee => {
    res.status(201).json({
      message: "Post added successfully",
      employeeDbTest:createdEmployee
    });
  });
});

router.get("", (req, res, next) => {
  EmployeeDbTest.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      employeeDbTest: documents
    });
  });
});
module.exports = router;
