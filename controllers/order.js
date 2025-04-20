const productmodel = require("../models/product");
const orderRep = require("../repository/order");
//get all orders

async function getAllOrders(req, res) {
  const orders = await orderRep.getAllOrders();
  res.status(200).json(orders);
}

async function getOrderbyId(req,res){
    const id = req.params.id
    const order = await orderRep.getOrderbyId(id)
    res.status(200).json(order)
}


async function createOrder(req, res) {
    
  try {
 const orderList = req.body.orderList
   const date = Date.now();
const customerId = req.body.customer

    const savedData = await orderRep.createOrder(orderList,customerId,date);
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateOrder(req,res){
    const id=req.params.id
    const data = req.body
    try
    {
       const updatedRecord= await orderRep.updateOrder(id,data)
res.status(200).json(updatedRecord)
    }
    catch(error){
        res.status(200).json({message:error.message})
    }
}

async function deleteOrder(req,res){
    const id = req.params.id
    try{
        await orderRep.deleteOrder(id)
res.status(200).json({message:"Deleted succesfully"})
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
}
module.exports = {
  getAllOrders,
  createOrder,
  getOrderbyId,
  updateOrder,
  deleteOrder
};