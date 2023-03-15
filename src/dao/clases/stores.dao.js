import StoreModel from "../models/stores.model.js";

export default class Store {
    getStores = async () => {
        const stores = await StoreModel.find()

        return stores
    }

    getStoreByID = async (id) => {
        const store = await StoreModel.findOne({_id: id})

        return store
    }

    saveStore = async (store) => {
        const result = await StoreModel.create(store)

        return result
    }

    updateStore = async (id, store) => {
        const result = await StoreModel.updateOne({_id: id}, { $set: store })

        return result
    }
}