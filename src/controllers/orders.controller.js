import Order from "../dao/clases/orders.dao.js"
import User from "../dao/clases/users.dao.js"
import Store from "../dao/clases/stores.dao.js"

const userService = new User()
const storeService = new Store()
const orderService = new Order()

export const getOrders = async (req, res) => {
    const result = await orderService.getOrders()
    
    res.send({status: 'success', result})
}

export const getOrderByID = async (req, res) => {
    const { oid } = req.params 
    const order = await orderService.getOrderByID(oid)
    
    res.send({status: 'success', result: order})
}

export const createOrder = async (req, res) => {
    
    // Body: { user: 1, store: 2, products: [] }
    const { user: uid, store: sid, products } = req.body 

    const user = await userService.getUserByID(uid)
    const store = await storeService.getStoreByID(sid)
    
    // Lista de los productos del store
    const actualOrders = store.products.filter( p => products.includes(p.id))
    const sum = actualOrders.reduce((sum, product) => sum += product.price, 0)

    const number = Date.now() + Math.floor(Math.random() * 10000 + 1)
    const order = {
        number,
        store: sid,
        status: 'PENDING',
        products:  actualOrders.map(p => p.id),
        totalPrice: sum
    }

    const result = await orderService.saveOrder(order)
    user.orders.push(result._id)
    await userService.updateUser(uid, user)

    res.send({status: 'success', result})
}

export const resolveOrder = async (req, res) => {
    const { resolve } = req.query 
    const { oid } = req.params 

    const order = await orderService.getOrderByID(oid)
    order.status = resolve 

    const result = await orderService.updateOrder(order._id, order)
    
    res.send({status: 'success', result})
}