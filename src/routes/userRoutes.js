const Router = require("express").Router();
const metodoController = require("../controllers/userController");

Router.get('/:id',metodoController.getById);
Router.get("/",metodoController.getByName);

module.exports = Router;
