const customer = require("../models/customer");

async function getAllCustomers() {
  const customers = customer.find();
  return customers ;
}

async function getCustomerbyId(id){
    const customerbyId = await customer.findById(id)
    return customerbyId;
}

async function createCustomer(name,place) {
  const newCustomer = new customer({
    name: name,
    place:place
  });
  const savedData = await newCustomer.save();
  return savedData;
}

async function updateCustomer(id,data){
    
const result=await customer.findByIdAndUpdate(id,data)
const updatedData = await customer.findById(id)
return updatedData
console.log(updatedData)
    
}

async function deleteCustomer(id)
{
    await customer.findByIdAndDelete(id)
}

module.exports = {
  getAllCustomers,
  createCustomer,
  getCustomerbyId,
  updateCustomer,
  deleteCustomer
};