const express=require('express')
const router = express.Router()
const orderController = require('../controllers/order')

//configuring brand routers
router.get('/',orderController.getAllOrders)
router.post('/',orderController.createOrder)
router.get('/:id',orderController.getOrderbyId)
router.patch('/:id',orderController.updateOrder)
router.delete('/:id',orderController.deleteOrder)
module.exports=router