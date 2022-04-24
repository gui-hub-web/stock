import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    user: {type: String, required: true},
    password: {type: Number, required: true}
  }
);

const users= mongoose.model('users', userSchema);

export default users;