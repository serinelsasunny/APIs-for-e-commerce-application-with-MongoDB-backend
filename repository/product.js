const product = require("../models/product");

async function getAllProducts() {
  const products = product.find()//.populate(['category','brand']);
  return products ;
}

async function getProductbyId(id){
    const productbyId = await product.findById(id)//.populate(['category','brand'])
    return productbyId;
}

async function createProduct(title,price,offerprice,description,categoryId,brandId) {
  const newProduct = new product({
    title: title,
    price:price,
    offerPrice:offerprice,
    description:description,
    category:categoryId,
    brand:brandId
    
  });
  const savedData = await newProduct.save();
  return savedData;
}

async function updateProduct(id,data){
    
const result=await product.findByIdAndUpdate(id,data)
const updatedData = await product.findById(id)
return updatedData
console.log(updatedData)
    
}

async function deleteProduct(id)
{
    await product.findByIdAndDelete(id)
}

module.exports = {
  getAllProducts,
  createProduct,
  getProductbyId,
  updateProduct,
  deleteProduct
};