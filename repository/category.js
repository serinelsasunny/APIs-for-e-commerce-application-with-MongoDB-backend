const category = require("../models/category");

async function getAllCategories() {
  const categories = category.find();
  return categories ;
}

async function getCategorybyId(id){
    const categorybyId = await category.findById(id)
    return categorybyId;
}

async function createCategory(name) {
  const newCategory = new category({
    name: name,
  });
  const savedData = await newCategory.save();
  return savedData;
}

async function updateCategory(id,data){
    
const result=await category.findByIdAndUpdate(id,data)
const updatedData = await category.findById(id)
return updatedData
console.log(updatedData)
    
}

async function deleteCategory(id)
{
    await category.findByIdAndDelete(id)
}

module.exports = {
  getAllCategories,
  createCategory,
  getCategorybyId,
  updateCategory,
  deleteCategory
};