import User from "../dao/clases/users.dao.js"

const userService = new User()

export const getUsers = async (req, res) => {
    const result = await userService.getUsers()
    res.send({status: 'success', result})
}

export const getUserByID = async (req, res) => {
    const { uid } = req.params
    const user = await userService.getUserByID(uid)

    res.send({status: 'success', result: user})
}

export const createUser = async (req, res) => {
    const user = req.body 
    const result = await userService.saveUser(user)
    
    res.send({status: 'success', result})
}