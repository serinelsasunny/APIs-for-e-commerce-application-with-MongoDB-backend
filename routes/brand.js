const express = require('express')
const router=express.Router()
const brandController = require('../controllers/brand')

//configuring brand routers
router.get('/',brandController.getAllBrands)
router.post('/',brandController.createBrand)
router.get('/:id',brandController.getBrandbyId)
router.patch('/:id',brandController.updateBrand)
router.delete('/:id',brandController.deleteBrand)
module.exports=router