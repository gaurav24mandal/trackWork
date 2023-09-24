const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const userRouter = require('./router/user_router')
// middleware 
app.use(express.json());

app.use('/',userRouter);
// listenting 

mongoose.connect('mongodb+srv://gaurav:7351@cluster0.axxechk.mongodb.net/')
.then(()=>{
    app.listen(300,()=>{
        console.log('db connected  server running  :');
    })
}).catch(()=>{
    console.log(Error);
}) 