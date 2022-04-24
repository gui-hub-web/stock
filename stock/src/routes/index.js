import express from "express";
import users from "./usersRoutes.js";
import products from "./productsRoutes.js";


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    users,
    products
  )
}

export default routes