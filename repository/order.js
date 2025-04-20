const order = require('../models/order')
const products = require('../models/product')
var total=0;
var totalBill=0            
async function getAllOrders()
{
    const orders = order.find()
    return orders
}
async function getOrderbyId(id){
    const orderbyId = await order.findById(id)
    return orderbyId;
}
async function getPricebyId(id){
    const prod = await products.findById(id)
    console.log("price:",prod.price)
    return prod.price
}
async function createOrder(orderList,customerId,date) {
const orders= orderList;

async function getTotal()
{
    orders.forEach(async (order)=>{
        const price = await getPricebyId(order.product)
        const quantity = order.quantity
        console.log("price:",price," quantity:", quantity)
    
    total = total+(price*quantity)
    console.log("(map method)total Amount:",total)

    })
    return total

}

const newOrder = new order({
   customer:customerId,   
   date:date
  });
  orders.forEach(order=>{
    newOrder.orderList.push(order.product)

    console.log(order)
})
newOrder.totalAmount= await getTotal()
await getTotal();

  
  const savedData = await newOrder.save();
  return savedData;
}

async function updateOrder(id,data){
    
const result=await order.findByIdAndUpdate(id,data)
const updatedData = await order.findById(id)
return updatedData
console.log(updatedData)
    
}

async function deleteOrder(id)
{
    await order.findByIdAndDelete(id)
}

module.exports = {
  getAllOrders,
  createOrder,
  getOrderbyId,
  updateOrder,
  deleteOrder
};
