import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin@cluster0.s9du6.mongodb.net/estoque");

let db = mongoose.connection;

export default db;