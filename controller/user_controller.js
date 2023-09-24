      const user  = require('../models/user_model');
      const jwt = require('jsonwebtoken');
      const createUser  = async(req,res)=>{
      const {name ,email, password} = req.body;
      
      if(!name || !email || !password) {
         res.send('fill the details')
      }
      const isUser = await user.findOne({email})
      if(isUser){
         res.send('user  already exists')
      } 
      await user.create({
         name,
         email,
         password
      })
      res.send('user register sucessfully');
      
      }

      const userLogin = async (req,res)=>{
      const {email ,password}= req.body; 
      if(!email || !password){
         res.send('fill all data')
      }
      const isUser =await  user.findOne({email});
      if(isUser || (password === user.password)){
         const token  = jwt.sign({
           User:{ 
            name : isUser.name,
            email: isUser.email,
            password:isUser.password,
            id: isUser.id 
         },
         },"gaurav@123",{expiresIn:"60m"})
         res.status(200).json({token})
      }else{
         res.status(401).send('email or the password  is not valid')
      }
         
      } 

      const currentUser =  async(req,res)=>{
         
          await  res.status(200).json(req.user);
      }
      exports.createUser = createUser ;
      exports.userLogin = userLogin;
      exports.currentUser = currentUser;