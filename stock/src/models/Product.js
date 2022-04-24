import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: {type: String},
    description: {type: String, required: true},
    hl: {type: Number, required: true},
    date: { type: Date, default: Date.now }
  }
);

const products= mongoose.model('products', productSchema);

export default products;