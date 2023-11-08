const express = require('express');
const router = express.Router()
const{
    getUsers,
    getUser,
    addUser,
    deleteUser
} = require('@controllers/usersController')

router.route('/').get(getUsers).post(addUser)
router.route('/:id').get(getUser).delete(deleteUser)

module.exports = router
