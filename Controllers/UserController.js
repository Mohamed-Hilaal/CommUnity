const User = require('../Modules/User') 

class UserController {

    async createUser (req, res) {
        try{
            const { name } = req.body.data 
            const user = new User({
                name: name
            })
    
            await user.save()
    
            res.status(200).json({
                message : "User Created Successfully"
            })
            
        }catch(err){
            res.status(500).json({
                message : "Failed to create user record"
            })
        }
    }
}


module.exports = new UserController()