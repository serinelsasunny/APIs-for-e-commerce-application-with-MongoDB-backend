const mongoose = require("mongoose");
const product = require("./product");
const customer = require("./customer");

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "customer",
  },
  orderList: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        require: true,
      },
      name: String,
      quantity: {
        type: Number,
        require: true,
      },
      price: Number,
    },
  ],
  date: {
    require: true,
    type: Date,
  },

  totalAmount: {
    type: Number,
  },
});
module.exports = mongoose.model("order", orderSchema);
