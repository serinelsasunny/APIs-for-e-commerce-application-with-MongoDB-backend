const express=require('express')
const router = express.Router()
const productController = require('../controllers/product')

//configuring brand routers
router.get('/',productController.getAllProducts)
router.post('/',productController.createProduct)
router.get('/:id',productController.getProductbyId)
router.patch('/:id',productController.updateProduct)
router.delete('/:id',productController.deleteProduct)
module.exports=router