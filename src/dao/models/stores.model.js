import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    products: []
})

const StoreModel = mongoose.model('Stores', schema)

export default StoreModel