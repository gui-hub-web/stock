import stocks from "../models/Stock.js";

class StockController {

  static listarStocks = (req, res) => {
    stocks.find((err, stocks) => {
      res.status(200).json(stocks)
  })
  }

  static listarStockPorId = (req, res) => {
    const id = req.params.id;

    stocks.findById(id, (err, stocks) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Stock não localizado.`})
      } else {
        res.status(200).send(stocks);
      }
    })
  }

  static cadastrarStock = (req, res) => {
    let stock = new stocks(req.body);

    stock.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Stock.`})
      } else {
        res.status(201).send(stock.toJSON())
      }
    })
  }

  static atualizarStock = (req, res) => {
    const id = req.params.id;

    stocks.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Stock atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirStock = (req, res) => {
    const id = req.params.id;

    stocks.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Stock removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default StockController