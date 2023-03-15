import { Router } from "express";
import { getStores, getStoreByID, createStore, addProduct } from '../controllers/stores.controller.js'

const router = Router()

router.get('/', getStores)
router.get('/:sid', getStoreByID)
router.post('/', createStore)
router.post('/:sid/product', addProduct)

export default router