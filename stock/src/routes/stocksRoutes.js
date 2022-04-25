import express from "express";
import StockController from "../controllers/stocksController.js";

const router = express.Router();

router
  .get("/stocks", StockController.listarStocks)
  .get("/stocks/:id", StockController.listarStockPorId)
  .post("/stocks", StockController.cadastrarStock)
  .put("/stocks/:id", StockController.atualizarStock)
  .delete("/stocks/:id", StockController.excluirStock)

export default router;