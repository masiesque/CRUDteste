const dotenv =require ("dotenv");
dotenv.config();
const express = require ('express');
const app =express();
const port = process.env.PORT;

app.use(express.json());
app.use("/user", require("./routes/userRoutes"))







app.listen(port || 3000,()=>{
console.log("Servidor rodando na porta:",port);
});