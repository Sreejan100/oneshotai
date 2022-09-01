const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    name:{type:String, required:true},
    Year:{type:String, required:true},
    CollegeId:{type:String, required:true},
    Skills:{type:String, required:true},

});

const Students = mongoose.model('student', StudentSchema);

module.exports = Students;