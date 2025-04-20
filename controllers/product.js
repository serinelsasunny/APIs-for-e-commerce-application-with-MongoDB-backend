const productRep = require("../repository/product");
//get all products

async function getAllProducts(req, res) {
  const products = await productRep.getAllProducts();
  res.status(200).json(products);
}

async function getProductbyId(req,res){
    const id = req.params.id
    const product = await productRep.getProductbyId(id)
    res.status(200).json(product)
}


async function createProduct(req, res) {
  try {
    const title = req.body.title;
    const price = req.body.price
    const offerPrice = req.body.offerPrice
    const description = req.body.description
    const category=req.body.category
    const brand = req.body.brand
    const savedData = await productRep.createProduct(title,price,offerPrice,description,category,brand);
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateProduct(req,res){
    const id=req.params.id
    const data = req.body
    try
    {
       const updatedRecord= await productRep.updateProduct(id,data)
res.status(200).json(updatedRecord)
    }
    catch(error){
        res.status(200).json({message:error.message})
    }
}

async function deleteProduct(req,res){
    const id = req.params.id
    try{
        await productRep.deleteProduct(id)
res.status(200).json({message:"Deleted succesfully"})
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
}
module.exports = {
  getAllProducts,
  createProduct,
  getProductbyId,
  updateProduct,
  deleteProduct
};