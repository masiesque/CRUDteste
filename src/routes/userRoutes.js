const Router = require("express").Router();
const metodoController = require("../controllers/userController");

Router.get('/:id',metodoController.getById);
Router.get("/",metodoController.getByName);
Router.post("/create",metodoController.createUser);
Router.put("/update/:id", metodoController.updateUser);
Router.delete("/delete/:id",metodoController.deleteUser);
module.exports = Router;
