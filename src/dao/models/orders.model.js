import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    number: Number,
    store: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Stores'
    },
    products: [],
    status: String,
    totalPrice: Number
})

const OrderModel = mongoose.model('Orders', schema)

export default OrderModel