const mongoose = require('mongoose');
const express = require('express');
const cors=require('cors')
const Colleges = require('./model/college');


const app = express();


const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const DB = 'mongodb+srv://Sreejan100:%40doglover**00))@cluster0.nyx9jda.mongodb.net/College?retryWrites=true&w=majority'; 



mongoose.connect(DB,{useNewUrlParser: true,  useUnifiedTopology: true}).then(()=>{
    console.log(`Connection Successful`);
}).catch((err)=>console.log(`no connection ${err}`));


const collegeRouter = require('./router/college');
app.use('/college/', collegeRouter);

const studentRouter = require('./router/student');
app.use('/student/', studentRouter);



app.listen(port,()=>console.log(`Server is running on port ${port}`));



