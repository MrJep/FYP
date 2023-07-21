const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userDetails = new Schema({
    userName:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    Role:{
        type: String
    }
},{ timestamps: true })

// Static signup method

userDetails.statics.signup = async function(userName, Password, Email, Role) {
   
    //Validation
    if (!Email || !Password || !userName || !Role) {
        throw Error('All required fields must be filled')
    }

    if (!validator.isEmail(Email)){
        throw Error('Not valid email address')
    }

    if (!validator.isStrongPassword(Password)){
        throw Error('Password not strong enough')
    }

    //Checking for duplicates
    const exists = await this.findOne({Email})

    if(exists){
        throw Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(Password, salt)

    const user = await this.create({userName, Password : hash, Email, Role})

    return user
}

userDetails.statics.login =  async function(Email, Password) {
    //Validation
    if (!Email || !Password) {
        throw Error('All required fields must be filled')
    }

    //Checking for user
    const user = await this.findOne({Email})

    if (!user) {
        throw Error('Email or password might be wrong')
    }

    const match = await bcrypt.compare(Password, user.Password)

    if(!match){
        throw Error('Email or password might be wrong')
    }

    return user
}

module.exports = mongoose.model('userdetails', userDetails)