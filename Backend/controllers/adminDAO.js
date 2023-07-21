const user = require('../models/userModel')


const getUsers = async (req, res) => {
    const users = await user.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

//Get specific User
const getUser = async (req, res) =>{
    const {Email} = req.body
    //Finding User by email
    const users = await user.find({Email: Email})
    
    if(!users) {
        return res.status(404).json({status: 'No such user'})
    }

    res.status(200).json(users)
}

//Create new User
const createUser = async (req, res) => {
    const {userName, Email, Password, Role} = req.body
    
    try {
        const user1 = await user.create({userName, Email, Password, Role})
        res.status(200).json({status: 'User Created Succesfully'})
    } catch (error) {
        res.status(400).json({status: error.message})
    }
    
}
//Delete User
const deleteUser = async (req,res) => {
    const {Email} = req.body
    //Finding User by email
    const users = await user.findOneAndDelete({Email: Email})

    if(!users) {
        return res.status(404).json({status: 'No such user'})
    }

    res.status(200).json({status: 'User Deleted Successfully'})
}
//Update User
const updateUser = async (req,res) => {
    const {userName, Email, Password, Role} = req.body

    //Finding User by email
    const users = await user.findOneAndUpdate({Email: Email}, {
        ...req.body
    })

    if(!users) {
        return res.status(404).json({status: 'No such user'})
    }

    res.status(200).json({status: 'User Updated Successfully'})

}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
}