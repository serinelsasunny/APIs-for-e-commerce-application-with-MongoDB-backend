const customerRep = require("../repository/customer");
//get all products

async function getAllCustomers(req, res) {
  const customers = await customerRep.getAllCustomers();
  res.status(200).json(customers);
}

async function getCustomerbyId(req,res){
    const id = req.params.id
    const customer = await customerRep.getCustomerbyId(id)
    res.status(200).json(customer)
}


async function createCustomer(req, res) {
  try {
    const name = req.body.name;
    const place = req.body.place
    const savedData = await customerRep.createCustomer(name,place);
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCustomer(req,res){
    const id=req.params.id
    const data = req.body
    try
    {
       const updatedRecord= await customerRep.updateCustomer(id,data)
res.status(200).json(updatedRecord)
    }
    catch(error){
        res.status(200).json({message:error.message})
    }
}

async function deleteCustomer(req,res){
    const id = req.params.id
    try{
        await customerRep.deleteCustomer(id)
res.status(200).json({message:"Deleted succesfully"})
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
}
module.exports = {
  getAllCustomers,
  createCustomer,
  getCustomerbyId,
  updateCustomer,
  deleteCustomer
};