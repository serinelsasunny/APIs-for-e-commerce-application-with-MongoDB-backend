const express = require('express')
const router=express.Router()
const categoryController = require('../controllers/category')
const productController = require('../controllers/product')

//configuring category routers
router.get('/',categoryController.getAllCategories)
router.post('/',categoryController.createCategory)
router.get('/:id',categoryController.getCategorybyId)
router.patch('/:id',categoryController.updateCategory)
router.delete('/:id',categoryController.deleteCategory)

//configuring product routers under category
router.get('/product',productController.getAllProducts)
router.post('/product',productController.createProduct)
router.get('/product/:id',productController.getProductbyId)
router.patch('/product/:id',productController.updateProduct)
router.delete('/product/:id',productController.deleteProduct)

//configuring product routers under brands in category
router.get('/brand/product',productController.getAllProducts)
router.post('/brand/product',productController.createProduct)
router.get('/brand/product/:id',productController.getProductbyId)
router.patch('/brand/product/:id',productController.updateProduct)
router.delete('/brand/product/:id',productController.deleteProduct)

module.exports=router