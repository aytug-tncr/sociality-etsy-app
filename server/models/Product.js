const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  product_id: Number,
  name: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model("Product", ProductSchema);
