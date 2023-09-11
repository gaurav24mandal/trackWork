const express = require('express');
const  mongoose = require('mongoose');
const app = express();
// middleware 
app.use(express.json());

// listenting 

mongoose.connect('mongodb+srv://yashGaurav:1234@cluster0.c6ik7vg.mongodb.net/')
.then(()=>{
    app.listen(300,()=>{
        console.log('db connected  server running  :');
    })
}).catch(()=>{
    console.log(Error);
}) 