import UserModel from "../models/users.model.js";

export default class User {
    getUsers = async() => {
        const users = await UserModel.find()

        return users
    }

    getUserByID = async(id) => {
        const user = await UserModel.findOne({_id: id})

        return user
    }

    saveUser = async (user) => {
        const result = await UserModel.create(user)

        return result
    }

    updateUser = async (id, user) => {
        const result = await UserModel.updateOne({_id: id}, { $set: user })

        return result
    }
}