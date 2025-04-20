const express = require('express')
const router=express.Router()
const customerController = require('../controllers/customer')

//configuring customer routers
router.get('/',customerController.getAllCustomers)
router.post('/',customerController.createCustomer)
router.get('/:id',customerController.getCustomerbyId)
router.patch('/:id',customerController.updateCustomer)
router.delete('/:id',customerController.deleteCustomer)
module.exports=router
