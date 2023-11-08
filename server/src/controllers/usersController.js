const { BadRequestError, NotFoundError } = require("@middlewares/errorHandling/errors");
const fs = require('fs')

var users = []
fs.readFile('src/data/heliverse_mock_data.json', 'utf8', (err, data) =>{
    if(err){
        console.log(`Error reading file: ${err}`);
        return
    }
    try{
        users = JSON.parse(data)
    }catch(error){
        next(error)
    }
})

const getUsers = async(req, res, next) =>{
    try {
        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
}

const getUser = async(req, res, next) => {
    try {
        const user_id  = req.params.id
        const user = users.find((user) => user.id === parseInt(req.params.id))
        if(user){
            res.status(200).json(user)
        }else{
            throw new NotFoundError(`user with id:${user_id} not found`)
        }
    } catch (error) {
        next(error)
    }
}

const addUser = async(req, res, next) =>{
    try {
        const newUser = req.body
        newUser.id = parseInt(newUser.id)
        users.push(newUser)
        res.status(201).json({
            users: users
        })
    } catch (error) {
        next(error)
    }
}

const deleteUser = async(req, res, next) =>{
    try {
        const user_id = parseInt(req.params.id)
        users = users.filter((user) => user.id !== user_id)
        res.json({
            message: `User with id ${user_id} deleted`
        })
        console.log(users);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUser,
    getUsers,
    addUser,
    deleteUser
}