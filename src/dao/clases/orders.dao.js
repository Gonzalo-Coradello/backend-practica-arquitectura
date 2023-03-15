import OrderModel from "../models/orders.model.js";

export default class Order {
    getOrders = async () => {
        const orders = await OrderModel.find()

        return orders
    }

    getOrderByID = async (id) => {
        const order = await OrderModel.findOne({_id: id})

        return order
    }

    saveOrder = async (order) => {
        const result = await OrderModel.create(order)

        return result
    }

    updateOrder = async (id, order) => {
        const result = await OrderModel.updateOne(
            {_id: id},
            {$set: order}
        )

        return result
    }
}