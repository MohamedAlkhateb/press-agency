const jwt = require("jsonwebtoken")
const userModel = require("../database/model/user.model")
const auth = async(req,res, next)=>{
    try{ 
    //get authorization from header bearer
    const token = req.header("Authorization").replace('Bearer ', "")
  // NOT REALY WORKING
    //verify token to _id
    const d_token = await jwt.verify(token, process.env.jwtKey)
  
   
    //check _id, token in db
    const user = await userModel.findOne({'tokens.token':token})
    
    if(!user) throw new Error("invalid user")
    req.user = user
    req.token = token
    //next
    next()
    }
    catch(e){
    //if !user not auth
    res.send({apiStatus:false, date:e.message, message:"not authorized"})
    }
}
module.exports = auth