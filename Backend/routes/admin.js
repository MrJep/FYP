const express = require('express')
const router = express.Router()
const {createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/adminDAO')


//Get all
router.get('/', getUsers)
//Get One
router.get('/', getUser)
//Post One Request
router.post('/', createUser)
//Delete One Request
router.delete('/', deleteUser)
//Update One Request
router.patch('/', updateUser)

module.exports = router