const userModel =require('../../database/model/user.model')

class user {
    static register = async (req,res)=>{
        try{
        const userData = new  userModel(req.body)
        await userData.save()
        res.send({
            apiStatus:true, data: userData, message:"added"
        })
    }
    catch(e){
        res.send({apiStatus:false, data:e.message, message:"error adding user"})
    }

    }
}

module.exports = user