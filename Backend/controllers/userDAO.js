const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

//login user
const loginUser = async (req,res) =>{
    const {Email, Password} = req.body

    try{
        const user1 = await user.login(Email, Password)
        // create token for authentication
        
        const token = createToken(user1._id)

        res.status(200).json({Email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//singup user
const signupUser = async (req,res) =>{
    const {userName, Password, Email, Role} = req.body

    try{
        const user1 = await user.signup(userName, Password, Email, Role)
        // create token for authentication
        const token = createToken(user1._id)

        res.status(200).json({Email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = {
    loginUser,
    signupUser
}