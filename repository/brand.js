const brand = require("../models/brand");

async function getAllBrands() {
  const brands = brand.find();
  return brands;
}

async function getBrandbyId(id){
    const brandbyId = await brand.findById(id)
    return brandbyId;
}

async function createBrand(name) {
  const newBrand = new brand({
    name: name,
  });
  const savedData = await newBrand.save();
  return savedData;
}

async function updateBrand(id,data){
    
const result=await brand.findByIdAndUpdate(id,data)
const updatedData = await brand.findById(id)
return updatedData
console.log(updatedData)
    
}

async function deleteBrand(id)
{
    await brand.findByIdAndDelete(id)
}

module.exports = {
  getAllBrands,
  createBrand,
  getBrandbyId,
  updateBrand,
  deleteBrand
};

