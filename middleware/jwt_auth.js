const jwt = require('jsonwebtoken')

const authUser = async (req,res,next)=>{
    const token  =  req.headers.authorization;
    if(token){
        const userToken = token.split(" ")[1];
        const decodedToken = jwt.verify(userToken,"gaurav@123")
        console.log('token verified');
        req.user = decodedToken;
         next();
    }
    if(!token){
        res.status(401).send("user is  unauthorized")
    }
    }
    exports.authUser = authUser;