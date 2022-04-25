import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    id: {type: String},
    description: {type: String, required: true},
    hl: {type: Number, required: true},
    date: { type: Date, default: Date.now }
  }
);

const stocks= mongoose.model('stocks', stockSchema);

export default stocks;