import express from 'express'
import usersRouter from './routes/users.router.js'
import ordersRouter from './routes/orders.router.js'
import storesRouter from './routes/stores.router.js'
import mongoose from 'mongoose'
import cors from 'cors'

const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT']
}))

app.use('/api/users', usersRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/stores', storesRouter)

mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: 'orderDelivery'
})
app.listen(PORT, () => console.log(`Running on port ${PORT}`))