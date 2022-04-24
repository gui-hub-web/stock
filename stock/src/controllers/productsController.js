import products from "../models/Product.js";

class ProductController {

  static listarProducts = (req, res) => {
    products.find((err, products) => {
      res.status(200).json(products)
  })
  }

  static listarProductPorId = (req, res) => {
    const id = req.params.id;

    products.findById(id, (err, products) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Product não localizado.`})
      } else {
        res.status(200).send(products);
      }
    })
  }

  static cadastrarProduct = (req, res) => {
    let product = new products(req.body);

    product.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Product.`})
      } else {
        res.status(201).send(product.toJSON())
      }
    })
  }

  static atualizarProduct = (req, res) => {
    const id = req.params.id;

    products.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Product atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirProduct = (req, res) => {
    const id = req.params.id;

    products.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Product removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default ProductController