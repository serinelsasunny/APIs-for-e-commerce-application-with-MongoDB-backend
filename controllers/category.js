const categoryRep = require("../repository/category");
//get all categories

async function getAllCategories(req, res) {
  const categories = await categoryRep.getAllCategories();
  res.status(200).json(categories);
}

async function getCategorybyId(req,res){
    const id = req.params.id
    const category = await categoryRep.getCategorybyId(id)
    res.status(200).json(category)
}


async function createCategory(req, res) {
  try {
    const name = req.body.name;
    const savedData = await categoryRep.createCategory(name);
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCategory(req,res){
    const id=req.params.id
    const data = req.body
    try
    {
       const updatedRecord= await categoryRep.updateCategory(id,data)
res.status(200).json(updatedRecord)
    }
    catch(error){
        res.status(200).json({message:error.message})
    }
}

async function deleteCategory(req,res){
    const id = req.params.id
    try{
        await categoryRep.deleteCategory(id)
res.status(200).json({message:"Deleted succesfully"})
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
}
module.exports = {
  getAllCategories,
  createCategory,
  getCategorybyId,
  updateCategory,
  deleteCategory
};