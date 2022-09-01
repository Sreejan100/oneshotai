const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collegeSchema = new Schema({

    name:{type:String, required:true},
    Year:{type:String, required:true},
    City:{type:String, required:true},
    State:{type:String, required:true},
    Country:{type:String, required:true},
    Noofstudents:{type:Number, required:true},
    Courses:{type:String, required:true},



});

const Colleges = mongoose.model('college', collegeSchema);

module.exports = Colleges;