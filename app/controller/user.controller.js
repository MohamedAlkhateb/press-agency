const userModel =require('../../database/model/user.model')

class user {
    static register = async (req,res)=>{
        try{
        const userData = new  userModel(req.body)
   
        await userData.save()
        res.send({
            apiStatus:true, data:userData, message:"added"
        })
    }
    catch(e){
        res.send({apiStatus:false, data:e.message, message:"error adding user"})
    }



    }

    static login = async (req,res)=>{
        try{
            const userData = await userModel.login(req.body.email, req.body.password)
            const token= await userData.generateToken()
            res.send({
                apiStatus:true,
                message:"logged in",
                data:{userData,token}
            })

        }catch(e){  
            res.send({
                apiStatus:false,
                data:e.message,
                message :"failed"
            })

        }
    }
    static singleUser = async(req,res)=>{
        res.send({apiStatus:true,data:req.user, message:'data featched'})
    }

    static logout = async(req,res)=> {
        // remove token 
        try{
            req.user.tokens= req.user.tokens.filter(tok => req.token != tok.token)
            await req.user.save()
            res.send({
                apiStatus:true,
             
                message :"logged out"
            })

        }catch(e){
            res.send({
                apiStatus:false,
                data:e.message,
                message :"failed loggout "
            })
            
        } 

    }
    //DOSN'T DELETE
     static deleteSingleAcount = async(req,res)=> {
        try{
            console.log(req.body.password)

            const user = await userModel.findByIdAndDelete(req.params.id)
            res.send({
                apiStatus:true, data: user, message:"data deleted successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"error deleting user"})
        }
    } 
     static edit = async(req,res)=> {
        try{

        }catch(e){
            
        } 
    }
    
}

module.exports = user
