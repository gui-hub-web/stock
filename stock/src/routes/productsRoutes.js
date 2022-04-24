import express from "express";
import ProductController from "../controllers/productsController.js";

const router = express.Router();

router
  .get("/products", ProductController.listarProducts)
  .get("/products/:id", ProductController.listarProductPorId)
  .post("/products", ProductController.cadastrarProduct)
  .put("/products/:id", ProductController.atualizarProduct)
  .delete("/products/:id", ProductController.excluirProduct)

export default router;