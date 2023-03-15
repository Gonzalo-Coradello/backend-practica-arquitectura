import Store from "../dao/clases/stores.dao.js"

const storeService = new Store()

export const getStores = async (req, res) => {
    const result = await storeService.getStores()
    if(!result) return res.status(500).send({status: 'error', error: 'Something happened'})
    
    res.send({status: 'success', result})
}

export const getStoreByID = async (req, res) => {
    const { sid } = req.params

    const result = await storeService.getStoreByID(sid)
    if(!result) return res.status(500).send({status: 'error', error: 'Something happened'})

    
    res.send({status: 'success', result})
}

export const createStore = async (req, res) => {
    const store = req.body 

    const result = await storeService.saveStore(store)

    if(!result) return res.status(500).send({status: 'error', error: 'Something happened'})

    res.send({status: 'success', result})
}

export const addProduct = async (req, res) => {
    const product = req.body 
    const { sid } = req.params

    const store = await storeService.getStoreByID(sid)
    store.products.push(product)

    const result = await storeService.updateStore(sid, store)

    if(!result) return res.status(500).send({status: 'error', error: 'Something happened'})

    res.send({status: 'success', result})
}