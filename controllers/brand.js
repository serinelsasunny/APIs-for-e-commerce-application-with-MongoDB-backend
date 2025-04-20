const brandRep = require("../repository/brand");
//get all brands
async function getAllBrands(req, res) {
  const brands = await brandRep.getAllBrands();
  res.status(200).json(brands);
}

async function getBrandbyId(req,res){
    const id = req.params.id
    const brand = await brandRep.getBrandbyId(id)
    res.status(200).json(brand)
}


async function createBrand(req, res) {
  try {
    const name = req.body.name;
    const savedData = await brandRep.createBrand(name);
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateBrand(req,res){
    const id=req.params.id
    const data = req.body
    try
    {
       const updatedRecord= await brandRep.updateBrand(id,data)
res.status(200).json(updatedRecord)
    }
    catch(error){
        res.status(200).json({message:error.message})
    }
}

async function deleteBrand(req,res){
    const id = req.params.id
    try{
        await brandRep.deleteBrand(id)
res.status(200).json({message:"Deleted succesfully"})
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
}
module.exports = {
  getAllBrands,
  createBrand,
  getBrandbyId,
  updateBrand,
  deleteBrand
};
