const mongoose = require('mongoose');


const employeeDbTest = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  dateOfBirth: { type: Date },
  dateOfJoining: { type: Date }
});

module.exports = mongoose.model('EmployeeDbTest', employeeDbTest);
