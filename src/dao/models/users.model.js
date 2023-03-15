import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Orders'
        }
    ]
})

const UserModel = mongoose.model('Users', schema)

export default UserModel